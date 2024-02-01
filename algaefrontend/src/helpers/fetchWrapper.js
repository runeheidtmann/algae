// fetchWrapper.js
import { useAuthStore } from '@/store/authStore';

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
}

function isTokenExpired(token) {
    if (!token) return true;
    const payload = parseJwt(token);
    if (!payload) return true;

    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
}

async function refreshAccessToken(refreshToken) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh: refreshToken })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("Token Refreshed")
        const data = await response.json();
        return data.access; // Return new accessToken
    } catch (error) {
        console.error('Error during token refresh:', error);
        throw error;
    }
}

async function fetchWrapper(url, options = {}) {
    const authStore = useAuthStore();

    if (isTokenExpired(authStore.accessToken)) {
        const newAccessToken = await refreshAccessToken(authStore.refreshToken);
        if (newAccessToken) {
            authStore.accessToken = newAccessToken;
            localStorage.setItem('accessToken', newAccessToken);
        } else {
            throw new Error('Unable to refresh access token');
        }
    }

    options.headers = options.headers || {};
    options.headers['Authorization'] = `Bearer ${authStore.accessToken}`;

    let response = await fetch(url, options);

    if (response.status === 401) {
        const newAccessToken = await refreshAccessToken(authStore.refreshToken);
        if (newAccessToken) {
            authStore.accessToken = newAccessToken;
            localStorage.setItem('accessToken', newAccessToken);
            options.headers['Authorization'] = `Bearer ${newAccessToken}`;
            response = await fetch(url, options);
        } else {
            throw new Error('Unable to refresh access token');
        }
    }

    return response;
}

export default fetchWrapper;

import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        userData: { username: '', }
    }),
    getters: {
        isLoggedIn: (state) => !!state.accessToken,
        isTokenExpired: (state) => {
            if (!state.accessToken) return true;
            const payload = parseJwt(state.accessToken);
            if (!payload) return true;

            const currentTime = Math.floor(Date.now() / 1000);
            console.log(payload.exp)
            return payload.exp < currentTime;
        }
    },

    actions: {
        tokenCheck() {
            if (this.isTokenExpired) {
                this.refreshAccessToken()
                console.log("checked")
            }

        },
        async login(username, password) {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/token/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                this.accessToken = data.access;
                this.refreshToken = data.refresh;

                localStorage.setItem('accessToken', this.accessToken);
                localStorage.setItem('refreshToken', this.refreshToken);

                await this.fetchUserData();

            } catch (error) {
                console.error('Error during login:', error);
                throw error;
            }
        },
        async signup(username, first_name, last_name, email, password) {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/register/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, first_name, last_name, email, password })
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.detail || 'Failed to sign up');
                }

                // Assuming the API returns access and refresh tokens upon successful signup
                const data = await response.json();
                this.accessToken = data.access;
                this.refreshToken = data.refresh;

                localStorage.setItem('accessToken', this.accessToken);
                localStorage.setItem('refreshToken', this.refreshToken);

                console.log('Signup and login successful');

                await this.fetchUserData();

            } catch (error) {
                console.error('Error during signup:', error);
                throw error;
            }
        },
        async fetchUserData() {
            this.tokenCheck()

            try {
                const response = await fetch('http://127.0.0.1:8000/api/userdata/', {
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                this.userData = await response.json();
                console.log(this.userData);


            } catch (error) {
                console.error('Error fetching user data:', error);
            }

        },
        async refreshAccessToken() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ refresh: this.refreshToken })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                this.accessToken = data.access;
                localStorage.setItem('accessToken', this.accessToken);
                console.log("refreshed token")
                await this.fetchUserData();
                console.log("Got userdata")
            } catch (error) {
                console.error('Error during token refresh:', error);
                throw error;
            }
        },

        logout() {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            this.accessToken = null;
            this.refreshToken = null;
        },
    },
});

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
// Utilities
import { defineStore } from 'pinia'
import { useAuthStore } from './authStore'; 

export const useAppStore = defineStore('appStore', {
    state: () => ({
        
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        async uploadDocument(title, file) {
            try {
                const aStore = useAuthStore()
                const formData = new FormData();
                formData.append('title', title);
                formData.append('file', file);

                const response = await fetch('http://127.0.0.1:8000/api/upload-document/', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${aStore.accessToken}`,
                    },
                    body: formData
                });
                for (var pair of formData.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const responseData = await response.json();
                return responseData;
            } catch (error) {
                console.error('Error uploading document:', error);
                throw error;
            }
        }
    },
})
// Utilities
import { defineStore } from 'pinia'
import { useAuthStore } from './authStore';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        documents: [],
        conversation: {},
    }),
    actions: {
        checkToken(){
            const authStore = useAuthStore()
            authStore.tokenCheck()
        },
        async sendChatQuery(question) {
            this.checkToken()
            this.conversation = {"question": question, "answer": ""}

            try {
                const aStore = useAuthStore()
                const formData = new FormData();
                formData.append('question', question);
                console.log(question)

                const response = await fetch('http://127.0.0.1:8000/api/chat/', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${aStore.accessToken}`,
                    },
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data)
                this.conversation = data

            } catch (error) {
                console.error('Error chatting:', error);
                throw error;
            }

        },
        async fetchUserDocuments() {
            this.checkToken()
            try {
                const response = await fetch('http://127.0.0.1:8000/api/documents/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Include the authorization header with your token
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error fetching documents');
                }

                const data = await response.json();

                const documents = processDocuments(data)

                this.documents = documents; // Store the documents in the state

            } catch (error) {
                console.error('Failed to fetch documents:', error);
                // Handle the error appropriately
            }
        },
        async uploadDocument(title, file) {
            this.checkToken()
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

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                this.fetchUserDocuments()
                console.log("uploaded succesfully")


            } catch (error) {
                console.error('Error uploading document:', error);
                throw error;
            }
        }
    },
    upDateConversation(question){
        this.conversation = {"question": question, "answer": ""}
    },
})

function processDocuments(inputData) {
    return inputData.map(data => {
        return {
            title: data.title,
            file: data.document_files.length > 0
                ? `<a href="${data.document_files[0].file}">${data.title}</a>`
                : 'No file available'
        };
    });
}
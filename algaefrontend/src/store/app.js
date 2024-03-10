// Utilities
import fetchWrapper from '@/helpers/fetchWrapper';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
    state: () => ({
        documents: [],
        conversation: {},
    }),
    actions: {
        async sendChatQuery(question) {
            this.conversation = { "question": question, "answer": "" }

            try {
                const formData = new FormData();
                formData.append('question', question);

                const response = await fetchWrapper('http://127.0.0.1:8000/api/chat/', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log(data)
                this.conversation = data;


            } catch (error) {
                console.error('Error chatting:', error);
                throw error;
            }
        },
        async sendEvaluation(user_rating) {
            const evaluationData = {
                user_question_raw: this.conversation['question'],
                user_question_enriched: 'Sample q Enriched',
                LLM_answer: this.conversation['question'],
                user_rating: user_rating,
                LLM: 2
            };

            try {
                const response = await fetchWrapper('http://127.0.0.1:8000/api/evaluations/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(evaluationData)
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
                }

            } catch (error) {
                console.error('Error evaluation:', error);
                throw error;
            }
        },


        async fetchUserDocuments() {
            try {
                const response = await fetchWrapper('http://127.0.0.1:8000/api/documents/', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Error fetching documents');
                }

                const data = await response.json();
                const documents = processDocuments(data);
                this.documents = documents;

            } catch (error) {
                console.error('Failed to fetch documents:', error);
            }
        },

        async uploadDocument(title, file) {
            try {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('file', file);

                const response = await fetchWrapper('http://127.0.0.1:8000/api/upload-document/', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                await this.fetchUserDocuments();
                console.log("uploaded successfully");

            } catch (error) {
                console.error('Error uploading document:', error);
                throw error;
            }
        },
        resetConversation() {
            console.log("in here")
            this.conversation = {};
        },
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

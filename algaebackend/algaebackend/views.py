from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from langchain_openai import OpenAI
from langchain_openai import ChatOpenAI
from langchain_openai import OpenAIEmbeddings
from langchain.schema import HumanMessage, SystemMessage
from langchain.chains import ConversationChain
import os
import json

import dotenv
dotenv.load_dotenv()

class ChatAPIView(APIView):

    def get(self, request, *args, **kwargs):
        OPENAI_API_KEY = os.getenv('OPENAI_API_KEY', 'YourAPIKey')
        print(OPENAI_API_KEY)
        chat = ChatOpenAI(temperature=0, openai_api_key=OPENAI_API_KEY)
        conversation = ConversationChain(llm=chat)
        respons = conversation.run("Translate this sentence from Danish to German: Jeg elsker at programmere!")
        data = {"text": respons, "dick": "x-lg"}
        # Assuming the API expects a JSON payload and returns a JSON response
        #response = requests.get('https://journalistbot.dk/api/metalliga', json=request.data)
        
        return Response(respons, 200)


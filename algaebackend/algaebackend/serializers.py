from rest_framework import serializers
from rest_framework.serializers import Serializer, FileField
from .models import Evaluation,LLM, Document,DocumentFile
from django.contrib.auth.models import User


class EvaluationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluation
        fields = '__all__'
        
class LLMSerializer(serializers.ModelSerializer):
    class Meta:
        model = LLM
        fields = ['name','description']
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
        # Add other fields you want to include
class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'title'] 

    def create(self, validated_data):
        # Get the user from the context (passed in the view)
        user = self.context.get('request').user
        # Create a new Document instance with the user
        document = Document.objects.create(user_id=user, **validated_data)
        return document

class DocumentFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentFile
        fields = ['id', 'file','document']
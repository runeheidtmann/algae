from django.db import models
from django.contrib.auth.models import User


class Document(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    def __str__(self):
        return self.title

class DocumentFile(models.Model):
    document = models.ForeignKey(Document,on_delete=models.CASCADE)
    file = models.FileField(upload_to='documents/', null=True, blank=True)
    
    def __str__(self):
        return str(self.id)

# Generated by Django 5.0.1 on 2024-01-21 12:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algaebackend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='llm',
            name='description',
            field=models.TextField(null=True),
        ),
    ]
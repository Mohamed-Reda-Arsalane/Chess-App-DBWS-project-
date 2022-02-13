from django.db import models

class User(models.Model):
    User_ID = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=18)
    Password = models.CharField(max_length=18)
    Wins = models.IntegerField()
    Is_online = models.BooleanField(default=False)

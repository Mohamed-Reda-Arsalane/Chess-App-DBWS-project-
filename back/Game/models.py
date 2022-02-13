from django.db import models

class Game(models.Model):
    Game_ID = models.AutoField(primary_key=True)
    Player_one = models.IntegerField(default=-1)
    Player_two = models.IntegerField(default=-1)


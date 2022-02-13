from django.db import models

class Piece(models.Model):
    piece_ID = models.AutoField(primary_key=True)
    type = models.CharField(max_length=30)
    color = models.CharField(max_length=30)


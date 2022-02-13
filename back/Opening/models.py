from django.db import models

class Opening(models.Model):
    opening_ID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    sequence_of_moves = models.CharField(max_length=150)
    Description = models.CharField(max_length=300)


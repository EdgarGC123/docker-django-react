from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    image = models.CharField(max_length=600)
    price = models.DecimalField(max_digits=10, decimal_places=2)

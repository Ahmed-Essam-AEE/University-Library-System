from django.db import models
from django.db.models.fields import BooleanField, CharField, DecimalField

class User(models.Model):
    username = models.CharField(max_length = 50)
    password = models.CharField(max_length= 20)
    def __str__(self):
        return self.username

class Book(models.Model):

    status_book = [
        ('available', 'available'),
        ('rental','rental'),
        ('sold','sold'),
    ]

    title = models.CharField(max_length = 250)
    author = models.CharField(max_length = 250)
    photo_book = models.ImageField(upload_to= 'photos', null = True, blank = True)
    photo_author = models.ImageField(upload_to= 'photos', null = True, blank = True)
    pages = models.IntegerField(null = True, blank = True)
    price = models.DecimalField(max_digits= 5, decimal_places= 2, null=True, blank=True)
    retal_price_day = models.DecimalField(max_digits= 5, decimal_places= 2, null=True, blank=True)
    retal_period = models.IntegerField(null=True, blank=True)
    active = models.BooleanField(default=True)
    state = models.CharField(max_length= 50, choices = status_book, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True, blank=True)
    def __str__(self):
        return self.title

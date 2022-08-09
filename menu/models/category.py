from django.db import models

from menu.models.base import BaseModel
from menu.models.restauraunt import Restauraunt



class Category(BaseModel):
    restauraunt = models.ForeignKey(Restauraunt, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, help_text="Введите название категории")
    photo = models.TextField()

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
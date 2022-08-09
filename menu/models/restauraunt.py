from django.db import models

from menu.models.base import BaseModel



class Restauraunt(BaseModel):
    name = models.CharField(max_length=50, help_text="Введите название заведения")

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
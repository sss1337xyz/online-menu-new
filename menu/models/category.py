from django.db import models

from menu.models.base import BaseModel
from menu.models.restauraunt import Restauraunt



class Category(BaseModel):
    restauraunt = models.ForeignKey(Restauraunt, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, db_index=True, help_text="Введите название категории")
    photo = models.ImageField(upload_to='categorys/%Y/%m/%d', blank=True)
    slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
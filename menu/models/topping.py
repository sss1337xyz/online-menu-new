from django.db import models

from menu.models.base import BaseModel
from menu.models.topping_groups import ToppingGroups



class Topping(BaseModel):
    topping_groups = models.ForeignKey(ToppingGroups, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, help_text="Введите название топпинга")
    price = models.FloatField(help_text="Введите цену топпинга")

    def __str__(self):
        return self.name
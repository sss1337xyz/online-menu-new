from django.db import models

from menu.models.base import BaseModel
from menu.models.category import Category



class ToppingGroups(BaseModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, help_text="Введите название группы топпингов")

    class Meta:
        ordering = ["name"]

    def __str__(self):
        """
        String for representing the MyModelName object (in Admin site etc.)
        """
        return self.name
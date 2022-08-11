from django.db import models
from menu.models.base import BaseModel
from menu.models.product import Product

class Questions(BaseModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    question = models.CharField(max_length=50, help_text="Введите вопрос")

    class Meta:
        ordering = ["question"]

    def __str__(self):
        return self.question
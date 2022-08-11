from django.db import models
from menu.models.base import BaseModel
from menu.models.questions import Questions


class Answers(BaseModel):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, help_text="Введите ответ на вопрос")
    price_increase = models.FloatField(help_text="Введите добавляемую цену")

    def __str__(self):
        return self.name
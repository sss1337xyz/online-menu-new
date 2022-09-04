# from django.db import models

# from menu.models.base import BaseModel



# class Restauraunt(BaseModel):
#     name = models.CharField(max_length=50, help_text="Введите название заведения")
#     slug = models.SlugField(max_length=200, db_index=True, unique=True)

#     class Meta:
#         ordering = ["name"]

#     def __str__(self):
#         return self.name
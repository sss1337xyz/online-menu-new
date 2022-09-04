from django.db import models

from menu.models.base import BaseModel
from menu.models.category import Category
from menu.models.topping_groups import ToppingGroups

def product_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'categorys/{0}/{1}/{2}'.format(instance.category.name, instance.name, filename)


class Product(BaseModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="Название", max_length=50, db_index=True, help_text="Введите название категории")
    photo = models.ImageField(verbose_name="Фото", upload_to=product_directory_path)
    grams = models.IntegerField(verbose_name="Граммы", blank=True, null=True)
    callory = models.IntegerField(verbose_name="Каллории", blank=True, null=True)
    protein = models.IntegerField(verbose_name="Белки", blank=True, null=True)
    fats = models.IntegerField(verbose_name="Жиры", blank=True, null=True)
    carbohydrates = models.IntegerField(verbose_name="Углеводы", blank=True, null=True)
    description = models.TextField(verbose_name="Описание")
    old_price = models.DecimalField(verbose_name="Старая цена", max_digits=9, decimal_places=0, blank=True, null=True, help_text="Если старой цены нету, заполните только новую цену")
    new_price = models.DecimalField(verbose_name="Новая цена", max_digits=9, decimal_places=0)
    topping_group = models.ForeignKey(ToppingGroups, on_delete=models.SET_NULL, blank=True, null=True, default=None)
    

    slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
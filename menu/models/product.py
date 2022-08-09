from django.db import models

from menu.models.base import BaseModel
from menu.models.category import Category
from menu.models.topping_groups import ToppingGroups

def product_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'categorys/{0}/{1}/{2}'.format(instance.category.name, instance.name, filename)


class Product(BaseModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, db_index=True, help_text="Введите название категории")
    photo = models.ImageField(upload_to=product_directory_path, blank=True)
    grams = models.FloatField()
    callory = models.FloatField()
    protein = models.FloatField()
    fats = models.FloatField()
    carbohydrates = models.FloatField()
    description = models.TextField()
    old_price = models.DecimalField(max_digits=9, decimal_places=2)
    new_price = models.DecimalField(max_digits=9, decimal_places=2)
    topping_group = models.ForeignKey(ToppingGroups, on_delete=models.SET_NULL, blank=True, null=True, default=None)

    slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
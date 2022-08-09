from django.db import models
from django.urls import reverse

from menu.models.base import BaseModel
from menu.models.restauraunt import Restauraunt

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'categorys/{0}/{1}'.format(instance.name, filename)


class Category(BaseModel):
    restauraunt = models.ForeignKey(Restauraunt, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, db_index=True, help_text="Введите название категории")
    photo = models.ImageField(upload_to=user_directory_path, blank=True)
    slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('category_detail', kwargs={'slug': self.slug})
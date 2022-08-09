from django.contrib import admin
from menu.models.product import Product


class ProductsAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'photo', 'grams', 'callory',
        'protein', 'fats', 'carbohydrates', 'description',
        'old_price', 'new_price', 'slug'
        ]
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Product, ProductsAdmin)
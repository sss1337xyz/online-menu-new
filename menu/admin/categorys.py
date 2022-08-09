from django.contrib import admin
from menu.models.category import Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'photo', 'slug']
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Category, CategoryAdmin)
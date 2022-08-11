from django.contrib import admin
import nested_admin

from menu.models.product import Product
from menu.models.questions import Questions
from menu.models.answers import Answers

class AnswerInline(nested_admin.NestedTabularInline):
    extra = 1
    model = Answers


class QuestionInline(nested_admin.NestedTabularInline):
    extra = 1
    model = Questions
    inlines = [
        AnswerInline
    ]

       
class ProductsAdmin(nested_admin.NestedModelAdmin):
    list_display = [
        'name', 'photo', 'grams', 'callory',
        'protein', 'fats', 'carbohydrates', 'description',
        'old_price', 'new_price', 'slug'
        ]
    inlines = [
        QuestionInline,
    ]
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Product, ProductsAdmin)
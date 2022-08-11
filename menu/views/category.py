from django.shortcuts import render
from menu.models import Category
from menu.models import Product
from menu.models import Topping
from menu.models import Questions

# Create your views here.

def index(request):
    categorys = Category.objects.all()
    return render(request, 'menu/index.html', context={'categorys_list': categorys})

def category_detail(request, slug):
    products = Product.objects.filter(category__slug=slug)
    return render(request, 'menu/products.html', context={'products_list': products, "category_slug": slug})

def product_detail(request, category__slug, slug):
    product = Product.objects.get(slug=slug)
    questions = Questions.objects.filter(product__id=product.id)
    toppings = Topping.objects.filter(topping_groups__id=product.id)
    return render(request, 'menu/about_product.html', context={'product': product, 'topping_list': toppings, 'questions': questions})

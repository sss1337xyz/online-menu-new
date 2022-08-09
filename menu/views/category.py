from django.shortcuts import render
from menu.models import Category
from menu.models import Product

# Create your views here.

def index(request):
    categorys = Category.objects.all()
    return render(request, 'menu/index.html', context={'categorys_list': categorys})

def category_detail(request, slug):
    products = Product.objects.filter(category__slug=slug)
    return render(request, 'menu/products.html', context={'products_list': products})

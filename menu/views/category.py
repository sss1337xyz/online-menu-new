from django.shortcuts import render
from menu.models import Category

# Create your views here.

def index(request):
    categorys = Category.objects.all()
    return render(request, 'menu/index.html', context={'categorys_list': categorys})

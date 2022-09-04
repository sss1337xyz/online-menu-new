from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST
from django.http import HttpResponse, JsonResponse
from menu.models import Category
from menu.models import Product
from menu.models import Topping
from menu.models import Questions
from cart.forms import CartAddProductForm
from cart.cart import Cart

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
    toppings = Topping.objects.filter(topping_groups__id=product.topping_group_id)
    return render(request, 'menu/about_product.html', context={'product': product, 'topping_list': toppings, 'questions': questions})

@require_POST
def cart_add(request, product_id):
    print(request.POST)
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(product=product,
                 quantity=cd['quantity'],
                 update_quantity=cd['update'])
        data = {'is_taken': True, 'item_total_price': cart.get_item_total_price(product_id=product_id), 'total_price': cart.get_total_price()}
        return JsonResponse(data=data)
    else:
        return JsonResponse(data={'is_taken': False})

@require_POST
def cart_add_advanced(request, product_id):
    print(request.POST)
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        print(cd)
        cart.add_advanced(product=product,
                 quantity=cd['quantity'],
                 toppings=cd['toppings'])
        data = {'is_taken': True}
        return JsonResponse(data=data)
    else:
        return JsonResponse(data={'is_taken': False})

@require_POST
def edit_advanced(request, id, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        print(cd)
        cart.edit_advanced(index=id,
                    quantity=cd['quantity'])
        data = {'is_taken': True, 'item_total_price': cart.get_item_advanced_total_price(index=id), 'total_price': cart.get_total_price()}
        return JsonResponse(data=data)
    else:
        return JsonResponse(data={'is_taken': False})

    
    

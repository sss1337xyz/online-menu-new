from django.shortcuts import render
from .cart import Cart

# Create your views here.
def index(request):
    cart = Cart(request)
    advanced = cart.getAdvanced()
    print(advanced)
    return render(request, 'cart/products.html', {'cart': cart, 'advanced': advanced})
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index, name='home'),
    path('category/<slug:slug>', views.category_detail),
    path('category/<slug:category__slug>/<slug:slug>', views.product_detail),
    path('cart/add/<int:product_id>', views.cart_add, name='cart_add'),
    path('cart/add-advanced/<int:product_id>', views.cart_add_advanced, name='cart_add_advanced'),
    path('cart/edit-advanced/<int:id>/<int:product_id>', views.edit_advanced, name='edit_advanced'),
]
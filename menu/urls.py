from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index),
    path('category/<slug:slug>', views.category_detail),
    path('category/<slug:category__slug>/<slug:slug>', views.product_detail)
]
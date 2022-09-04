from decimal import Decimal
from unicodedata import decimal
from django.conf import settings
from menu.models import Product
from menu.models import Topping


class Cart(object):

    def __init__(self, request):
        """
        Инициализируем корзину
        """
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            # save an empty cart in the session
            cart = self.session[settings.CART_SESSION_ID] = {'advanced': []}
        self.cart = cart

    def __iter__(self):
        """
        Перебор элементов в корзине и получение продуктов из базы данных.
        """
        product_ids = list(self.cart.keys())[1:]
        # получение объектов product и добавление их в корзину
        products = Product.objects.filter(id__in=product_ids)
        for product in products:
            self.cart[str(product.id)]['product'] = product

        for item in list(self.cart.values())[1:]:
            item['new_price'] = Decimal(item['new_price'])
            item['total_price'] = item['new_price'] * item['quantity']
            yield item

    def __len__(self):
        """
        Подсчет всех товаров в корзине.
        """
        return sum(item['quantity'] for item in list(self.cart.values())[1:])

    def getAdvanced(self):
        """
        Получение всех элементов содержащие топпинги
        """
        
        for advanced in self.cart['advanced']:
            product = Product.objects.get(pk=advanced['id'])
            advanced['product'] = product
            advanced['new_price'] = Decimal(advanced['new_price'])
            advanced['total_price'] = advanced['new_price'] * advanced['quantity']
            for topping in advanced['toppings']:
                topping['toppingProduct'] = Topping.objects.get(pk=topping['id'])
                topping['totalPrice'] = Decimal(topping['toppingProduct'].price) * Decimal(topping['quantity'])
                advanced['total_price'] += topping['totalPrice']
        return self.cart['advanced']


    def add(self, product, quantity=1, update_quantity=False, toppings=False):
        """
        Добавить продукт в корзину или обновить его количество.
        """
        product_id = str(product.id)
        if product_id not in self.cart:
            self.cart[product_id] = {'quantity': 0,
                                    'new_price': str(product.new_price)}
        if update_quantity:
            self.cart[product_id]['quantity'] = quantity
        else:
            self.cart[product_id]['quantity'] += quantity
        
        self.save()

    def add_advanced(self, product, quantity=1, toppings=False, variations=False):
        """
        Добавить новый продукт с топпингом или вариацией
        """
        product_id = str(product.id)
    
        self.cart['advanced'].append({'id': product_id,
                                'quantity': quantity,
                                'new_price': str(product.new_price),
                                'toppings': toppings,
                                'variations': variations
                                })                     
        self.save()
    
    def edit_advanced(self, index, quantity):
        self.cart['advanced'][index]['quantity'] = quantity
        self.save()
    
    def get(self, product_id):
        return self.cart[product_id]
    
    def get_item_total_price(self, product_id):
        product_id = str(product_id)
        sum = Decimal(self.cart[product_id]['new_price']) * Decimal(self.cart[product_id]['quantity'])
        return sum

    def get_item_advanced_total_price(self, index):
        sum = Decimal(self.cart['advanced'][index]['new_price']) * Decimal(self.cart['advanced'][index]['quantity'])
        if self.cart['advanced'][index]['toppings']:
            for topping in self.cart['advanced'][index]['toppings']:
                priceTopping = Topping.objects.get(pk=topping['id']).price
                sum += Decimal(priceTopping) * Decimal(topping['quantity'])
        if self.cart['advanced'][index]['variations']:
            pass
        return sum

    def save(self):
        # Обновление сессии cart
        self.session[settings.CART_SESSION_ID] = self.cart
        # Отметить сеанс как "измененный", чтобы убедиться, что он сохранен
        self.session.modified = True

    def remove(self, product):
        """
        Удаление товара из корзины.
        """
        product_id = str(product.id)
        if product_id in self.cart:
            del self.cart[product_id]
            self.save()
            
    def get_total_price(self):
        """
        Подсчет стоимости товаров в корзине.
        """
        summa = sum(Decimal(item['new_price']) * item['quantity'] for item in
                list(self.cart.values())[1:])
        for idx, item in enumerate(self.cart['advanced']):
            summa += self.get_item_advanced_total_price(idx)
        return summa

    def clear(self):
        # удаление корзины из сессии
        del self.session[settings.CART_SESSION_ID]
        self.session.modified = True
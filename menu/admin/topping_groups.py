from django.contrib import admin
import nested_admin
from menu.models.topping import Topping
from menu.models.topping_groups import ToppingGroups

class ToppingInline(nested_admin.NestedTabularInline):
    extra = 1
    model = Topping


class ToppingAdmin(nested_admin.NestedModelAdmin):
    model = ToppingGroups
    inlines = [ToppingInline]
admin.site.register(ToppingGroups, ToppingAdmin)
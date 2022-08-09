from django.contrib import admin
from menu.models.restauraunt import Restauraunt


class RestaurauntAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Restauraunt, RestaurauntAdmin)
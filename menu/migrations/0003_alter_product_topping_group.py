# Generated by Django 4.1 on 2022-08-09 20:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0002_alter_product_topping_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='topping_group',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='menu.toppinggroups'),
        ),
    ]
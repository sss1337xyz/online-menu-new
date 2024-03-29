# Generated by Django 4.1 on 2022-09-04 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_product_new_price_alter_product_old_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='callory',
            field=models.IntegerField(blank=True, null=True, verbose_name='Каллории'),
        ),
        migrations.AlterField(
            model_name='product',
            name='carbohydrates',
            field=models.IntegerField(blank=True, null=True, verbose_name='Углеводы'),
        ),
        migrations.AlterField(
            model_name='product',
            name='fats',
            field=models.IntegerField(blank=True, null=True, verbose_name='Жиры'),
        ),
        migrations.AlterField(
            model_name='product',
            name='grams',
            field=models.IntegerField(blank=True, null=True, verbose_name='Граммы'),
        ),
        migrations.AlterField(
            model_name='product',
            name='protein',
            field=models.IntegerField(blank=True, null=True, verbose_name='Белки'),
        ),
    ]

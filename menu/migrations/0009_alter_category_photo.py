# Generated by Django 4.1 on 2022-08-09 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0008_restauraunt_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='photo',
            field=models.ImageField(blank=True, upload_to='media/categorys/%Y/%m/%d'),
        ),
    ]

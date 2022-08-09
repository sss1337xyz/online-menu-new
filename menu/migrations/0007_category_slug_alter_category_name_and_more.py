# Generated by Django 4.1 on 2022-08-09 13:41

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0006_alter_category_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.SlugField(default=django.utils.timezone.now, max_length=200, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(db_index=True, help_text='Введите название категории', max_length=50),
        ),
        migrations.AlterField(
            model_name='category',
            name='photo',
            field=models.ImageField(blank=True, upload_to='categorys/%Y/%m/%d'),
        ),
    ]

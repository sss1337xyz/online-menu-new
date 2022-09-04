# Generated by Django 4.1 on 2022-08-26 21:56

from django.db import migrations, models
import django.db.models.deletion
import menu.models.category
import menu.models.product


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, help_text='Введите название категории', max_length=50)),
                ('photo', models.ImageField(blank=True, upload_to=menu.models.category.user_directory_path)),
                ('slug', models.SlugField(max_length=200, unique=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, help_text='Введите название категории', max_length=50, verbose_name='Название')),
                ('photo', models.ImageField(upload_to=menu.models.product.product_directory_path, verbose_name='Фото')),
                ('grams', models.FloatField(blank=True, verbose_name='Граммы')),
                ('callory', models.FloatField(blank=True, verbose_name='Каллории')),
                ('protein', models.FloatField(blank=True, verbose_name='Белки')),
                ('fats', models.FloatField(blank=True, verbose_name='Жиры')),
                ('carbohydrates', models.FloatField(blank=True, verbose_name='Углеводы')),
                ('description', models.TextField(verbose_name='Описание')),
                ('old_price', models.DecimalField(blank=True, decimal_places=2, help_text='Если старой цены нету, ставьте заполните только новую цену', max_digits=9, verbose_name='Старая цена')),
                ('new_price', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Новая цена')),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.category')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='ToppingGroups',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Введите название группы топпингов', max_length=50)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.category')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Topping',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Введите название топпинга', max_length=50)),
                ('price', models.FloatField(help_text='Введите цену топпинга')),
                ('topping_groups', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.toppinggroups')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(help_text='Введите вопрос', max_length=50)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.product')),
            ],
            options={
                'ordering': ['question'],
            },
        ),
        migrations.AddField(
            model_name='product',
            name='topping_group',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='menu.toppinggroups'),
        ),
        migrations.CreateModel(
            name='Answers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Введите ответ на вопрос', max_length=50)),
                ('price_increase', models.FloatField(help_text='Введите добавляемую цену')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.questions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

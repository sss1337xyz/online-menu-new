from rest_framework import serializers
from menu.models import Category
from menu.models import Product
from menu.models import Topping
from menu.models import ToppingGroups
from menu.models import Topping
from menu.models import Questions
from menu.models import Answers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'photo', 'slug')

class ToppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topping
        fields = '__all__'

class ToppingGroupsSerializer(serializers.ModelSerializer):
    toppings = serializers.SerializerMethodField()
    class Meta:
        model = ToppingGroups
        fields = '__all__'
    def get_toppings(self, topping_group):
            toppings = Topping.objects.filter(topping_groups=topping_group.id)
            return ToppingSerializer(toppings, many=True).data

class AnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answers
        fields = '__all__'

class QuestionsSerializer(serializers.ModelSerializer):
    answers = serializers.SerializerMethodField()
    class Meta:
        model = Questions
        fields = ('id', 'question', 'answers')

    def get_answers(self, question):
        answers = Answers.objects.filter(question=question.id)
        return AnswersSerializer(answers, many=True).data

class ProductSerializer(serializers.ModelSerializer):
    topping_group = ToppingGroupsSerializer(read_only=True)
    questions = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ('id', 'name', 'photo', 'grams', 'callory',
                         'protein', 'fats', 'carbohydrates', 'description',
                         'old_price', 'new_price', 'slug', 'topping_group', 'questions'
                         )
    def get_questions(self, product):
        questions = Questions.objects.filter(product__id=product.id)
        return QuestionsSerializer(questions, many=True).data
from django import forms

from django.forms.models import inlineformset_factory
import json

PRODUCT_QUANTITY_CHOICES = [(i, str(i)) for i in range(1, 21)]



class CartAddProductForm(forms.Form):
    quantity = forms.TypedChoiceField(choices=PRODUCT_QUANTITY_CHOICES, coerce=int)
    update = forms.BooleanField(required=False, initial=False, widget=forms.HiddenInput)

    toppings = forms.JSONField(required=False)

    def clean_jsonfield(self):
        jdata = self.cleaned_data['toppings']
        try:
            json_data = json.loads(jdata) #loads string as json
            #validate json_data
        except:
            raise forms.ValidationError("Invalid data in jsonfield")
        #if json data not valid:
        #raise forms.ValidationError("Invalid data in jsonfield")
        return jdata
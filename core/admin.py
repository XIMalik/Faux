from django.contrib import admin
from core.models import Info
# Register your models here.

class InfoAdmin(admin.ModelAdmin):
    # Specify the fields to display in the admin interface
    list_display = (
        'full_name', 'address', 'state', 'city', 
        'gender', 'dob', 'marital_status', 
        'phone_number', 'email', 'monthly_income', 
        'i_have_a_car', 'occupation', 'rent_or_own', 
        'application_purpose', 'valid_id', 
        'additional_message'
    )
    # Optional: add filters and search fields
    search_fields = ('full_name', 'email', 'phone_number')
    list_filter = ('gender', 'marital_status', 'rent_or_own')

# Register the Info model with the custom admin class
admin.site.register(Info, InfoAdmin)
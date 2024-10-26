from django.db import models

class Info(models.Model):

    created_at = models.DateTimeField(auto_now=True)
    full_name = models.CharField(max_length=100, null=False, blank=False, editable=False)
    address = models.CharField(max_length=255, null=False, blank=False, editable=False)
    state = models.CharField(max_length=100, null=False, blank=False, editable=False)
    city = models.CharField(max_length=100, null=False, blank=False, editable=False)
    gender = models.CharField(max_length=10, null=False, blank=False, editable=False)
    age = models.PositiveIntegerField(null=False, blank=False, editable=False)
    marital_status = models.CharField(max_length=10, null=False, blank=False, editable=False)
    phone_number = models.CharField(max_length=15, null=False, blank=False, editable=False)
    email = models.EmailField(max_length=100, null=False, blank=False, editable=False)
    monthly_income = models.CharField(max_length=100, null=False, blank=False, editable=False)
    i_have_a_car = models.BooleanField(default=False, editable=False)
    occupation = models.CharField(max_length=100, null=False, blank=False, editable=False)
    rent_or_own = models.CharField(max_length=20, null=False, blank=False, editable=False)
    application_purpose = models.TextField(null=False, blank=False, editable=False)
    valid_id = models.FileField(upload_to='id_documents/', null=False, blank=False, editable=False)
    additional_message = models.TextField(null=True, blank=True, editable=False)

    def __str__(self):
        return f"{self.full_name} - {self.email}"

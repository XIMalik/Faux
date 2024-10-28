from django.shortcuts import render
from core.models import Info
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from core.serializers import InfoSerializer

class InfoCreate(APIView):
    def post(self, request):
        full_name = request.data.get('full_name', '').strip()  # Remove whitespace
        address = request.data.get('address', '').strip()
        state = request.data.get('state', '').strip()
        city = request.data.get('city', '').strip()
        gender = request.data.get('gender', '').strip()
        dob = request.data.get('dob', '').strip()
        marital_status = request.data.get('marital_status', '').strip()
        phone_number = request.data.get('phone_number', '').strip()
        email = request.data.get('email', '').strip()
        monthly_income = request.data.get('monthly_income', '').strip()
        i_have_a_car = request.data.get('i_have_a_car', '').strip().lower() == 'true'
        occupation = request.data.get('occupation', '').strip()
        rent_or_own = request.data.get('rent_or_own', '').strip()
        application_purpose = request.data.get('application_purpose', '').strip()
        valid_id = request.FILES.get('valid_id')  # Use request.FILES for file uploads
        additional_message = request.data.get('additional_message', '').strip()

        valid_id.name = valid_id.name.replace(' ', '_')

        info = Info.objects.create(
            full_name=full_name,
            address=address,
            state=state,
            city=city,
            gender=gender,
            dob=dob,
            marital_status=marital_status,
            phone_number=phone_number,
            email=email,
            monthly_income=monthly_income,
            i_have_a_car=i_have_a_car,
            occupation=occupation,
            rent_or_own=rent_or_own,
            application_purpose=application_purpose,
            valid_id=valid_id,
            additional_message=additional_message,
        )

        return Response({"message": "Info created successfully", "data": {
            "id": info.id,
            "full_name": info.full_name,
            "email": info.email,
            "gender": info.gender,  # Include gender in response
            "age": info.dob,
            "marital_status": info.marital_status,  # Include marital_status in response
        }}, status=status.HTTP_201_CREATED)


class InfoGet(APIView):
    def get(self, request):
        queryset = Info.objects.all()
        serializer = InfoSerializer(queryset, many=True)  # Serialize queryset

        response = {
            "count": queryset.count(),
            "results": serializer.data  # Include serialized data
        }

        return Response(response, status=status.HTTP_200_OK)
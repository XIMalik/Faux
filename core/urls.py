from django.contrib import admin
from django.urls import path, include
from core.views import InfoCreate, InfoGet
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("submit", InfoCreate.as_view(), name='submit'),
    path("get-all", InfoGet.as_view(), name='get-all'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

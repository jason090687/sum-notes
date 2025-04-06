from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import FeatureViewSet

router = DefaultRouter()
router.register(r'features', FeatureViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
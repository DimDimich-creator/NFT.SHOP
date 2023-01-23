from django.urls import path
from .views import GetNftCardView

urlpatterns = [
    path('get-nft', GetNftCardView.as_view()),
]
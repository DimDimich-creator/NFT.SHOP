from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import NftCard
from .serializers import NftCardSerializer


# Create your views here.
class GetNftCardView(APIView):
  serializer_class = NftCardSerializer

  def get(self, request, format=None):
    # with open('/media/'+NftCard.objects.all().values_list("image")[0][0], 'rb') as f:
    #   image_data = f.read()
    # return Response(image_data, content_type="image/png")
    limit = request.GET.get('limit')
    tag = request.GET.get('tag')
    cards = NftCard.objects.filter(tag=tag)
    
    if tag == None:
      cards = NftCard.objects.all()
      
    if limit == None:
      data = [self.serializer_class(card).data for card in cards]
      return Response(data, status=status.HTTP_200_OK)
    if not limit.isdigit():
      return Response({'Bad request': 'Limit parameter must be integer'}, status=status.HTTP_400_BAD_REQUEST)
    data = list(self.serializer_class(card).data for card in cards[:int(limit)])
    return Response(data, status=status.HTTP_200_OK)
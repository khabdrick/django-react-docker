from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from rest_framework.response import Response
from .models import Contact

@api_view(['GET'])
def api_endpoints(request):
    api_urls = {
        'contact_list': '/',
        'Add': '/create',
    }
  
    return Response(api_urls)

@api_view(['POST'])
def create_contact(request):
	contact = ContactSerializer(data=request.data)

	if contact.is_valid():
		contact.save()
		return Response(contact.data)
	else:
		return Response(status=status.HTTP_404_NOT_FOUND)



class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


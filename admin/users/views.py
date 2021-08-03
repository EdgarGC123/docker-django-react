from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import exceptions
from .models import User
# import users.models import User

# Create your views here.


@api_view(['GET'])
def registers(request):
    data = request.data

    if data['password'] != data['password_confirm']:
        raise exceptions.APIException('Passwords do not match!')

    serializer = userSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def users(request):
    users = User.objects.all()
    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data)

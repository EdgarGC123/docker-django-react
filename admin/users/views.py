from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import exceptions, serializers
from .models import User
from .serializers import UserSerializer
# import users.models import User

# Create your views here.


@api_view(['POST'])
def register(request):
    data = request.data

    if data['password'] != data['password_confirm']:
        raise exceptions.APIException('Passwords do not match!')

    serializer = UserSerializer(data=data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = User.objects.filter(email=email).first()

    if user is None:
        raise exceptions.AuthenticationFailed("User Not Found!")

    if not user.check_password(password):
        raise exceptions.AuthenticationFailed("Incorrect Password!")

    return Response('success')


@api_view(['GET'])
def users(request):
    users = User.objects.all()
    serializer = UserSerializer(User.objects.all(), many=True)
    return Response(serializer.data)

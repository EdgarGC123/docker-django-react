from django.contrib import admin
from django.urls import path

from .views import PermissionAPIView, register, login, AuthenticatedUser, logout, RoleViewSet, UserGenericAPIView  # users

urlpatterns = [
    # path('users', users),
    path('register', register),
    path('login', login),
    path('user', AuthenticatedUser.as_view()),
    path('logout', logout),
    path('permissions', PermissionAPIView.as_view()),
    path('roles', RoleViewSet.as_view({
        'get': 'list',
        'post': 'create'
    })),
    path('roles/<str:pk>', RoleViewSet.as_view({
        'get': 'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),
    path('users', UserGenericAPIView.as_view()),
    path('user/<str:pk>', UserGenericAPIView.as_view()),
]

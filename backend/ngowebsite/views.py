from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

def home(request):
    return render(request, 'home.html')


def aboutus(request):
    return render(request, 'aboutus.html')

class ArticleView(APIView):
    def get(self, request):
        count = int(request.GET.get("counter"))
        return Response({"count":count + 5})
    

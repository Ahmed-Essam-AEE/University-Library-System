from django.shortcuts import render
from .models import  *
def demo(request):
    return render(request, 'demo.html')


def about(request):
    context = {
        'books' : Book.objects.all(),
    }
    return render(request, 'about.html', context)

def available(request):
    return render(request, 'aval.html')

def information(request):
    return render(request, 'info.html')

def borrow(request):
    return render(request, 'borrow.html')

def browse(request):
    return render(request, 'browse.html')


def extend(request):
    return render(request, 'extend.html')

def return1(request):
    return render(request, 'return.html')


def operation(request):
    return render(request, 'operation.html')
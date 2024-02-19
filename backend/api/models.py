from django.db import models

class Department(models.Model):
    departmentID = models.AutoField(primary_key = True)
    departmentName = models.CharField(max_length = 50)

class Course(models.Model):
    courseID = models.AutoField(primary_key = True)
    courseName = models.CharField(max_length = 100)
    departmentID = models.ForeignKey(Department, on_delete = models.CASCADE)
    time = models.TimeField()
    size = models.IntegerField()

class Student(models.Model):
    studentID = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length = 25)
    lastName = models.CharField(max_length = 25)
    email = models.EmailField(max_length = 50)
    courses = models.ManyToManyField(Course, through='Enrollment')

class Enrollment(models.Model):
    studentID = models.ForeignKey(Student, on_delete = models.CASCADE)
    courseID = models.ForeignKey(Course, on_delete = models.CASCADE)
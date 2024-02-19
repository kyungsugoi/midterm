from rest_framework import serializers
from .models import Department, Course, Student, Enrollment

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('departmentID', 'departmentName')

class CourseSerializer(serializers.ModelSerializer):
    departmentID = DepartmentSerializer()
    class Meta:
        model = Course
        fields = ('courseID', 'courseName', 'departmentID', 'time', 'size')

class StudentSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, required=False)
    class Meta:
        model = Student
        fields = ('studentID', 'firstName', 'lastName', 'email', 'courses')

class EnrollmentSerializer(serializers.ModelSerializer):
    courseID = CourseSerializer()
    studentID = StudentSerializer()
    class Meta:
        model = Enrollment
        fields = ('studentID', 'courseID')
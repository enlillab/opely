class Student:
    name = "Ali"
    age = 20
    grade = 80

    def study(self):
        print("Student is studying")

    def attend(self):
        print("Student attended the class")

student1 = Student()

print(student1.name)
print(student1.age)
print(student1.grade)

student1.study()
student1.attend()
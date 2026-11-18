class Student:
    def __init__(self, name, mark):
        self.name = name
        self.mark = mark

s1 = Student("Ali", 80)
s2 = Student("Omar", 70)
s3 = Student("Ahmed", 90)

print(s1.name, s1.mark)
print(s2.name, s2.mark)
print(s3.name, s3.mark)
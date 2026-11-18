class Student:
    def __init__(self, name, mark):
        self.name = name
        self.mark = mark

s1 = Student("Ali", 80)
s2 = Student("Omar", 70)
s3 = Student("Noor", 90)

students = [s1, s2, s3]

for s in students:
    print(s.name, s.mark)
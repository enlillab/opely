class Student:
    def __init__(self, name):
        self.name = name
        self.marks = {}

    def add_mark(self, subject, mark):
        self.marks[subject] = mark

s1 = Student("Ali")
s2 = Student("Omar")

s1.add_mark("Python", 90)
s1.add_mark("AI", 85)

s2.add_mark("Python", 70)
s2.add_mark("AI", 80)

print(s1.name, s1.marks)
print(s2.name, s2.marks)
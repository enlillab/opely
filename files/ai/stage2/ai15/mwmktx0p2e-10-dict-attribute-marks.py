class Student:
    def __init__(self, name):
        self.name = name
        self.marks = {}

    def add_mark(self, subject, mark):
        self.marks[subject] = mark

s = Student("Ali")

s.add_mark("Python", 90)
s.add_mark("AI", 85)

print(s.name)
print(s.marks)
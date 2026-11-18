class Student:
    def __init__(self, name, mark):
        self.name = name
        self.mark = mark

s1 = Student("Ali", 80)
s2 = Student("Omar", 70)

students = {
    101: s1,
    102: s2
}

print(students[101].name)
print(students[102].mark)
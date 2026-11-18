class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def average(self):
        total = 0

        for mark in self.marks:
            total += mark

        return total / len(self.marks)

s = Student("Ali", [80, 90, 70])

print(s.average())
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def average(self):
        total = 0

        for mark in self.marks.values():
            total += mark

        return total / len(self.marks)

s = Student("Ali",
            {"Python": 90, "AI": 80, "Math": 70})

print(s.name, s.average())
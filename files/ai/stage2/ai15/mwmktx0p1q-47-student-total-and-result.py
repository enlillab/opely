
class Student:

    def total(self, a, b, c):
        s = 0
        for mark in (a, b, c):
            s += mark
        return s

    def result(self, a, b, c):
        avg = self.total(a, b, c) / 3
        if avg >= 50:
            return "Pass"
        return "Fail"


s = Student()

print(s.total(60, 70, 80))
print(s.result(60, 70, 80))

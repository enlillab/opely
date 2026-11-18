
class Student:

    def result(self, mark, pass_mark):
        if mark >= pass_mark:
            return "Pass"
        else:
            return "Fail"


s1 = Student()
s2 = Student()

print(s1.result(75, 50))
print(s2.result(40, 50))


class Student:
    mark = 75
    status = ""

    def check(self):
        return self.mark >= 50

    def result(self):
        if self.check():
            self.status = "Pass"
        else:
            self.status = "Fail"
        return self.status


s = Student()
print(s.result())

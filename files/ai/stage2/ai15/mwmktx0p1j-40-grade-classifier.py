
class GradeCalculator:

    def classify(self, grade):
        if grade >= 90:
            return "Excellent"
        elif grade >= 80:
            return "Very Good"
        elif grade >= 70:
            return "Good"
        elif grade >= 50:
            return "Pass"
        else:
            return "Fail"


g = GradeCalculator()

print(g.classify(95))
print(g.classify(75))
print(g.classify(45))

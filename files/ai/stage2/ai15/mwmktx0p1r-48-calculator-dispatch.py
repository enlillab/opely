
class Calculator:

    def add(self, a, b):
        return a + b

    def multiply(self, a, b):
        return a * b

    def calculate(self, a, b, op):
        match op:
            case 1:
                return self.add(a, b)
            case 2:
                return self.multiply(a, b)
            case _:
                return None


c = Calculator()

print(c.calculate(5, 3, 1))
print(c.calculate(5, 3, 2))

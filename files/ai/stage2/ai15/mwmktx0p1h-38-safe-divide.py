class Calculator:
    def divide(self, a, b):
        if b == 0:
            return None

        return a / b


calc = Calculator()

print(calc.divide(20, 4))
print(calc.divide(20, 0))
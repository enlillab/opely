class Calculator:
    def factorial(self, n):
        if n < 0:
            return None
        f = 1
        for i in range(1, n + 1):
            f *= i
        return f

c = Calculator()
print(c.factorial(5))
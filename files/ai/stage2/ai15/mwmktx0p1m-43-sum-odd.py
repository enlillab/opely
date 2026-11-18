class Calculator:
    def odd(self, a, b):
        s = 0
        for i in range(a, b + 1):
            if i % 2 != 0:
                s += i
        return s

c = Calculator()
print(c.odd(1, 10))
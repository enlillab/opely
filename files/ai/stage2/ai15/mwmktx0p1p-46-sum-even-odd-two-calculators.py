class Calculator:

    def sum_even(self, start, end):
        total = 0
        for n in range(start, end + 1):
            if n % 2 == 0:
                total += n
        return total

    def sum_odd(self, start, end):
        total = 0
        for n in range(start, end + 1):
            if n % 2 != 0:
                total += n
        return total


c1 = Calculator()
c2 = Calculator()

print("Calculator 1:")
print("Even:", c1.sum_even(1, 10))
print("Odd:", c1.sum_odd(1, 10))

print("Calculator 2:")
print("Even:", c2.sum_even(10, 20))
print("Odd:", c2.sum_odd(10, 20))
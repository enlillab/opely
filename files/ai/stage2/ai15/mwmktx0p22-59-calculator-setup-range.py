
class Calculator:

    def setup(self, start, end):
        self.start = start
        self.end = end

    def sum_even(self):
        total = 0
        for n in range(self.start, self.end + 1):
            if n % 2 == 0:
                total += n
        return total

    def sum_odd(self):
        total = 0
        for n in range(self.start, self.end + 1):
            if n % 2 != 0:
                total += n
        return total


c1 = Calculator()
c2 = Calculator()

c1.setup(1, 10)
c2.setup(10, 20)

print("Calculator 1:")
print("Even:", c1.sum_even())
print("Odd:", c1.sum_odd())

print("Calculator 2:")
print("Even:", c2.sum_even())
print("Odd:", c2.sum_odd())

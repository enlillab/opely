
class Calculator:

    def count_even(self, start, end):
        count = 0
        for n in range(start, end + 1):
            if n % 2 == 0:
                count += 1
        return count

    def count_odd(self, start, end):
        count = 0
        for n in range(start, end + 1):
            if n % 2 != 0:
                count += 1
        return count


c = Calculator()

print("Even:", c.count_even(1, 10))
print("Odd:", c.count_odd(1, 10))

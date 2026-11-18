
class StarPattern:

    def setup(self, n, symbol):
        self.n = n
        self.symbol = symbol

    # 1. Upper Left Triangle
    def upper(self):
        for i in range(1, self.n + 1):
            print((self.symbol + " ") * i)

    # 2. Lower Left Triangle
    def lower(self):
        for i in range(self.n, 0, -1):
            print((self.symbol + " ") * i)

    # 3. Upper Right Triangle
    def upper_right(self):
        for i in range(1, self.n + 1):
            print("  " * (self.n - i) +
                  (self.symbol + " ") * i)

    # 4. Lower Right Triangle
    def lower_right(self):
        for i in range(self.n, 0, -1):
            print("  " * (self.n - i) +
                  (self.symbol + " ") * i)

    # 5. Square
    def square(self):
        for i in range(self.n):
            print((self.symbol + " ") * self.n)

    # 6. Primary Diagonal
    def primary(self):
        for i in range(self.n):
            for j in range(self.n):
                if i == j:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 7. Secondary Diagonal
    def secondary(self):
        for i in range(self.n):
            for j in range(self.n):
                if i + j == self.n - 1:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 8. Both Diagonals (X)
    def both(self):
        for i in range(self.n):
            for j in range(self.n):
                if i == j or i + j == self.n - 1:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 9. Above Primary Diagonal
    def above_primary(self):
        for i in range(self.n):
            for j in range(self.n):
                if j > i:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 10. Below Primary Diagonal
    def below_primary(self):
        for i in range(self.n):
            for j in range(self.n):
                if j < i:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 11. Above Secondary Diagonal
    def above_secondary(self):
        for i in range(self.n):
            for j in range(self.n):
                if i + j < self.n - 1:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 12. Below Secondary Diagonal
    def below_secondary(self):
        for i in range(self.n):
            for j in range(self.n):
                if i + j > self.n - 1:
                    print(self.symbol, end=" ")
                else:
                    print(" ", end=" ")
            print()

    # Select Pattern
    def show(self):

            self.upper()

            self.lower()

            self.upper_right()

            self.lower_right()

            self.square()

            self.primary()

            self.secondary()

            self.both()

            self.above_primary()

            self.below_primary()

            self.above_secondary()

            self.below_secondary()



p1 = StarPattern()
p2 = StarPattern()
p3 = StarPattern()

p1.setup(5, "*")
p2.setup(4, "#")
p3.setup(3, "+")

p1.show()
p2.show()
p3.show()

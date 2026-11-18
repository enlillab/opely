class Pattern:

    # 1. Upper Left Triangle
    def upper(self, n):
        for i in range(1, n + 1):
            print("* " * i)

    # 2. Lower Left Triangle
    def lower(self, n):
        for i in range(n, 0, -1):
            print("* " * i)

    # 3. Upper Right Triangle
    def upper_right(self, n):
        for i in range(1, n + 1):
            print("  " * (n - i) + "* " * i)

    # 4. Lower Right Triangle
    def lower_right(self, n):
        for i in range(n, 0, -1):
            print("  " * (n - i) + "* " * i)

    # 5. Square
    def square(self, n):
        for i in range(n):
            print("* " * n)

    # 6. Primary Diagonal
    def primary(self, n):
        for i in range(n):
            for j in range(n):
                if i == j:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 7. Secondary Diagonal
    def secondary(self, n):
        for i in range(n):
            for j in range(n):
                if i + j == n - 1:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 8. Both Diagonals (X)
    def both(self, n):
        for i in range(n):
            for j in range(n):
                if i == j or i + j == n - 1:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 9. Above Primary Diagonal
    def above_primary(self, n):
        for i in range(n):
            for j in range(n):
                if j > i:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 10. Below Primary Diagonal
    def below_primary(self, n):
        for i in range(n):
            for j in range(n):
                if j < i:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 11. Above Secondary Diagonal
    def above_secondary(self, n):
        for i in range(n):
            for j in range(n):
                if i + j < n - 1:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # 12. Below Secondary Diagonal
    def below_secondary(self, n):
        for i in range(n):
            for j in range(n):
                if i + j > n - 1:
                    print("*", end=" ")
                else:
                    print(" ", end=" ")
            print()

    # Select Pattern
    def show(self, n, choice):
        match choice:
            case 1:
                self.upper(n)
            case 2:
                self.lower(n)
            case 3:
                self.upper_right(n)
            case 4:
                self.lower_right(n)
            case 5:
                self.square(n)
            case 6:
                self.primary(n)
            case 7:
                self.secondary(n)
            case 8:
                self.both(n)
            case 9:
                self.above_primary(n)
            case 10:
                self.below_primary(n)
            case 11:
                self.above_secondary(n)
            case 12:
                self.below_secondary(n)
            case _:
                print("Invalid choice")


p = Pattern()
p.show(5, 8)
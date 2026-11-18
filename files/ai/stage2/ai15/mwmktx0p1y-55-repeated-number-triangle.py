class Pattern:
    def numbers(self, n):
        for i in range(1, n + 1):
            for j in range(i):
                print(i, end=" ")
            print()

p = Pattern()
p.numbers(5)
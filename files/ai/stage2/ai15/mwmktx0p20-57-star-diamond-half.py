
class Pattern:

    def upper(self, n):
        for i in range(1, n + 1):
            print("* " * i)

    def lower(self, n):
        for i in range(n - 1, 0, -1):
            print("* " * i)

    def show(self, n):
        self.upper(n)
        self.lower(n)


p = Pattern()
p.show(4)

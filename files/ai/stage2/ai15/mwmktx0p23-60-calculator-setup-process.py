
class Calculator:

    def setup(self, a, b):
        self.a = a
        self.b = b

    def add(self):
        return self.a + self.b

    def subtract(self):
        return self.a - self.b

    def multiply(self):
        return self.a * self.b

    def divide(self):
        if self.b == 0:
            return None
        return self.a / self.b

    def process(self):
        print("Addition:", self.add())
        print("Subtraction:", self.subtract())
        print("Multiplication:", self.multiply())
        print("Division:", self.divide())


c1 = Calculator()
c2 = Calculator()

c1.setup(10, 5)
c2.setup(8, 2)

print("Calculator 1:")
c1.process()

print("Calculator 2:")
c2.process()

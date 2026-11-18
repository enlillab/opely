class Calculator:
    x = 0
    y = 0

    def add(self):
        print(self.x + self.y)

    def subtract(self):
        print(self.x - self.y)

    def multiply(self):
        print(self.x * self.y)

    def divide(self):
        print(self.x / self.y)


c = Calculator()

c.x = 20
c.y = 5

c.add()
c.subtract()
c.multiply()
c.divide()
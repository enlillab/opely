class Car:
    def __init__(self, model, speed):
        self.model = model
        self.speed = speed

c1 = Car("BMW", 80)
c2 = Car("Toyota", 60)

c1.speed = 100

print(c1.model, c1.speed)
print(c2.model, c2.speed)
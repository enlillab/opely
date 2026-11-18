class Car:
    speed = 0

    def accelerate(self):
        self.speed += 10

car1 = Car()
car2 = Car()
car3 = Car()

car1.accelerate()

car2.accelerate()
car2.accelerate()

car3.accelerate()
car3.accelerate()
car3.accelerate()

print(car1.speed)
print(car2.speed)
print(car3.speed)
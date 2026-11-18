class Car:
    speed = 0

    def accelerate(self):
        self.speed += 10

my_car = Car()

my_car.accelerate()
print(my_car.speed)

my_car.accelerate()
print(my_car.speed)

my_car.accelerate()
print(my_car.speed)
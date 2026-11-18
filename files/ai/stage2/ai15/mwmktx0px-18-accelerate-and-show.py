class Car:
    speed = 0

    def accelerate(self):
        self.speed += 10

    def show_speed(self):
        print(self.speed)

car1 = Car()

car1.accelerate()
car1.show_speed()

car1.accelerate()
car1.show_speed()
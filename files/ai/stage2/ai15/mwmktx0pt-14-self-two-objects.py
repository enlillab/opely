class Car:
    speed = 0

    def show_speed(self):
        print(self.speed)

car1 = Car()
car2 = Car()

car1.speed = 50
car2.speed = 100

car1.show_speed()
car2.show_speed()
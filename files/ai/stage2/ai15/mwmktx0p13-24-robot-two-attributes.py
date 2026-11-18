class Robot:
    speed = 0
    battery = 100

    def move(self):
        self.speed += 10
        self.battery -= 5

    def show_status(self):
        print("Speed:", self.speed)
        print("Battery:", self.battery)

robot1 = Robot()

robot1.move()
robot1.move()

robot1.show_status()
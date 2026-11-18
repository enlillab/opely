class Drone:
    altitude = 0
    speed = 0
    battery = 100

    def take_off(self):
        self.altitude = 10
        self.battery -= 5

    def rise(self):
        self.altitude += 10
        self.battery -= 5

    def accelerate(self):
        self.speed += 10
        self.battery -= 5

    def land(self):
        self.altitude = 0
        self.speed = 0

    def show_status(self):
        print("Altitude:", self.altitude)
        print("Speed:", self.speed)
        print("Battery:", self.battery)

drone1 = Drone()

drone1.take_off()
drone1.rise()
drone1.accelerate()
drone1.show_status()
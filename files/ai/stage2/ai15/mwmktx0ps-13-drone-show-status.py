class Drone:
    altitude = 0
    battery = 100

    def show_status(self):
        print("Altitude:", self.altitude)
        print("Battery:", self.battery)

drone1 = Drone()

drone1.show_status()
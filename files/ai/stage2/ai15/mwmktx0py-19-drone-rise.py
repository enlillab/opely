class Drone:
    altitude = 0

    def rise(self):
        self.altitude += 10

    def show_altitude(self):
        print(self.altitude)

drone1 = Drone()

drone1.rise()
drone1.rise()
drone1.rise()

drone1.show_altitude()
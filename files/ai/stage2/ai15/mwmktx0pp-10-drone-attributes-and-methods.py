class Drone:
    altitude = 0
    battery = 100

    def take_off(self):
        print("Drone is taking off")

    def land(self):
        print("Drone is landing")

drone1 = Drone()

print(drone1.altitude)
print(drone1.battery)

drone1.take_off()
drone1.land()
class Drone:
    def __init__(self, name, battery):
        self.name = name
        self.battery = battery
        self.altitude = 0
        self.status = "Ready"

    def rise(self, meters):
        self.altitude += meters
        self.battery -= 10

    def check(self):
        if self.battery < 20:
            return "Low Battery"
        return "Flying"

    def fly(self, meters):
        self.rise(meters)
        self.status = self.check()

d1 = Drone("D1", 100)
d2 = Drone("D2", 25)

d1.fly(50)
d2.fly(20)

print(d1.name, d1.altitude, d1.battery, d1.status)
print(d2.name, d2.altitude, d2.battery, d2.status)
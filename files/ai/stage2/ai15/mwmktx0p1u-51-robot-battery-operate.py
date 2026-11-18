
class Robot:
    battery = 100
    distance = 0

    def move(self, meters):
        self.distance += meters
        self.battery -= meters * 2

    def check(self):
        if self.battery < 20:
            return "Low Battery"
        return "Battery OK"

    def operate(self, meters):
        self.move(meters)
        return self.check()


r = Robot()

print(r.operate(20))
print(r.operate(25))
print("Distance:", r.distance)
print("Battery:", r.battery)

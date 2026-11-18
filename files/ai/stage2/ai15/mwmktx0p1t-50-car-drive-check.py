
class Car:
    speed = 0
    status = "Stopped"

    def accelerate(self, value):
        self.speed += value

    def check(self):
        if self.speed > 120:
            return "Warning"
        return "Safe"

    def drive(self, value):
        self.accelerate(value)
        self.status = self.check()
        return self.status


c = Car()
print(c.drive(130))

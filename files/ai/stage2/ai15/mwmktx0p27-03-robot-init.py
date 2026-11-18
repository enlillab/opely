class Robot:
    def __init__(self, name, speed):
        self.name = name
        self.speed = speed

r1 = Robot("R1", 5)
r2 = Robot("R2", 10)
r3 = Robot("R3", 15)

print(r1.name, r1.speed)
print(r2.name, r2.speed)
print(r3.name, r3.speed)
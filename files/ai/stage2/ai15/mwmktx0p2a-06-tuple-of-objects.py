class Sensor:
    def __init__(self, name, value):
        self.name = name
        self.value = value

s1 = Sensor("Temperature", 35)
s2 = Sensor("Humidity", 60)
s3 = Sensor("Pressure", 90)

sensors = (s1, s2, s3)

for s in sensors:
    print(s.name, s.value)
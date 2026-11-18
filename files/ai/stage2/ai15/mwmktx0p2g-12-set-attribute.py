class Robot:
    def __init__(self, name):
        self.name = name
        self.objects = set()

    def detect(self, object_name):
        self.objects.add(object_name)

r = Robot("R1")

r.detect("Car")
r.detect("Person")
r.detect("Car")

print(r.objects)
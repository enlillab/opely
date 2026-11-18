class Camera:
    def __init__(self, name):
        self.name = name
        self.status = "ON"
        print(name, "opened")

    def capture(self):
        print(self.name, "captured image")

    def __del__(self):
        print(self.name, "closed")

c1 = Camera("Front Camera")
c2 = Camera("Rear Camera")

c1.capture()
c2.capture()

del c1
del c2
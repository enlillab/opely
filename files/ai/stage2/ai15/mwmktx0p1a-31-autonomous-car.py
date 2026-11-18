class AutonomousCar:
    frames = 0
    vehicles = 0
    pedestrians = 0
    traffic_signs = 0

    def capture(self):
        self.frames += 1

    def detect_vehicle(self):
        self.vehicles += 1

    def detect_pedestrian(self):
        self.pedestrians += 1

    def detect_sign(self):
        self.traffic_signs += 1

    def show_status(self):
        print("Frames:", self.frames)
        print("Vehicles:", self.vehicles)
        print("Pedestrians:", self.pedestrians)
        print("Traffic Signs:", self.traffic_signs)

car1 = AutonomousCar()

car1.capture()
car1.detect_vehicle()
car1.detect_vehicle()
car1.detect_pedestrian()
car1.detect_sign()

car1.show_status()
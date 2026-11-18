class VacuumRobot:
    def start(self):
        print("Cleaning started")

    def clean(self):
        print("Cleaning the floor")

    def stop(self):
        print("Cleaning stopped")

robot1 = VacuumRobot()

robot1.start()
robot1.clean()
robot1.stop()
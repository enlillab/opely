
class Robot:
    distance = 0

    def move(self, meters, speed):
        if meters <= 0 or speed <= 0:
            return None

        self.distance += meters
        return meters / speed


robot1 = Robot()
robot2 = Robot()

print("Robot 1 time:", robot1.move(20, 2))
print("Robot 2 time:", robot2.move(60, 3))

print("Robot 1 distance:", robot1.distance)
print("Robot 2 distance:", robot2.distance)

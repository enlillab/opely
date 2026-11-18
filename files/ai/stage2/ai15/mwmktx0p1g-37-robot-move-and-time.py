
class Robot:
    distance = 0
    speed = 5

    def move(self, meters):
        self.distance += meters

    def calculate_time(self, meters):
        return meters / self.speed


robot1 = Robot()

robot1.move(20)
time = robot1.calculate_time(20)

print("Distance:", robot1.distance)
print("Travel time:", time)

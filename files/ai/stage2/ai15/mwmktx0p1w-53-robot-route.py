class Robot:
    x = 0
    y = 0

    def move(self, direction, steps):
        if steps <= 0:
            return False

        match direction:
            case "up":
                self.y += steps
            case "down":
                self.y -= steps
            case "right":
                self.x += steps
            case "left":
                self.x -= steps
            case _:
                return False

        return True

    def execute(self, commands):
        for direction, steps in commands:
            self.move(direction, steps)
        return self.x, self.y

r1 = Robot()
r2 = Robot()

route1 = [("up", 5), ("right", 3)]
route2 = [("left", 4), ("down", 2)]

print(r1.execute(route1))
print(r2.execute(route2))
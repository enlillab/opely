
class TrafficLight:

    def action(self, color):
        match color:
            case "red":
                return "Stop"
            case "yellow":
                return "Prepare"
            case "green":
                return "Go"
            case _:
                return "Invalid"


light1 = TrafficLight()
light2 = TrafficLight()

print(light1.action("red"))
print(light2.action("green"))

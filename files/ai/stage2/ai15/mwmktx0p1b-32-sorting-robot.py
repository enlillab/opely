class SortingRobot:
    objects = 0
    plastic = 0
    metal = 0
    sorted_items = 0

    def scan_object(self):
        self.objects += 1

    def detect_plastic(self):
        self.plastic += 1

    def detect_metal(self):
        self.metal += 1

    def sort_item(self):
        self.sorted_items += 1

    def show_status(self):
        print("Objects:", self.objects)
        print("Plastic:", self.plastic)
        print("Metal:", self.metal)
        print("Sorted Items:", self.sorted_items)

robot1 = SortingRobot()

robot1.scan_object()
robot1.detect_plastic()
robot1.sort_item()

robot1.scan_object()
robot1.detect_metal()
robot1.sort_item()

robot1.show_status()
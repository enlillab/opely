class Smartphone:
    battery = 100

    def call(self):
        self.battery -= 10

    def show_battery(self):
        print(self.battery)

phone1 = Smartphone()

phone1.call()
phone1.call()
phone1.show_battery()
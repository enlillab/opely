class Smartphone:
    battery = 100

    def call(self):
        print("Calling...")

    def charge(self):
        print("Charging...")

phone1 = Smartphone()

print(phone1.battery)
phone1.call()
phone1.charge()
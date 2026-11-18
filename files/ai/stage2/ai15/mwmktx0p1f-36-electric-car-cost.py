
class ElectricCar:
    total_cost = 0

    def calculate_cost(self, distance, consumption, price):
        energy = distance * consumption / 100
        self.total_cost = energy * price
        return self.total_cost


car1 = ElectricCar()
car2 = ElectricCar()

print("Car 1:", car1.calculate_cost(100, 15, 100))
print("Car 2:", car2.calculate_cost(200, 20, 100))

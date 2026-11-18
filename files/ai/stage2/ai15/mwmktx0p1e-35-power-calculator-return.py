
class PowerCalculator:
    power = 0

    def calculate(self, voltage, current):
        self.power = voltage * current
        return self.power


calc1 = PowerCalculator()
calc2 = PowerCalculator()
calc3 = PowerCalculator()

print("Circuit 1:", calc1.calculate(12, 2), "W")
print("Circuit 2:", calc2.calculate(5, 3), "W")
print("Circuit 3:", calc3.calculate(24, 1.5), "W")

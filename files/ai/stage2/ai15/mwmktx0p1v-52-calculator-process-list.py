class Calculator:
    def calculate(self, a, b, op):
        match op:
            case "+":
                return a + b
            case "-":
                return a - b
            case "*":
                return a * b
            case _:
                return None

    def process(self, operations):
        results = []

        for a, b, op in operations:
            result = self.calculate(a, b, op)
            if result is not None:
                results.append(result)

        return results

c = Calculator()

jobs = [(10, 5, "+"), (8, 2, "*"), (9, 3, "-")]
print(c.process(jobs))
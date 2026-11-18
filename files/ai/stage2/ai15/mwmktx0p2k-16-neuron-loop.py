class Neuron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias

    def calculate(self, inputs):
        total = self.bias

        for i in range(len(inputs)):
            total += inputs[i] * self.weights[i]

        return total

n = Neuron([0.5, 0.8, 0.2], 1)

print(n.calculate([2, 3, 5]))
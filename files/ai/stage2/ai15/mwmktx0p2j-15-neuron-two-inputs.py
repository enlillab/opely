class Neuron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias

    def calculate(self, inputs):
        return (inputs[0] * self.weights[0] +
                inputs[1] * self.weights[1] +
                self.bias)

n1 = Neuron([0.5, 0.8], 1)
n2 = Neuron([1.0, 0.2], 0)

x = [2, 3]

print(n1.calculate(x))
print(n2.calculate(x))
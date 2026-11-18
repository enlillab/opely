class Neuron:
    def __init__(self, weights, bias):
        self.weights = weights
        self.bias = bias

    def output(self, inputs):
        total = self.bias

        for i in range(len(inputs)):
            total += inputs[i] * self.weights[i]

        return total

n1 = Neuron([0.5, 0.2], 1)
n2 = Neuron([0.8, 0.4], 0)

neurons = [n1, n2]

inputs = [2, 3]

for n in neurons:
    print(n.output(inputs))
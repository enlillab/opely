class Stack:
    def __init__(self, name):
        self.name = name
        self.items = []

    def push(self, value):
        self.items.append(value)

s1 = Stack("Numbers")
s2 = Stack("Letters")

s1.push(10)
s1.push(20)

s2.push("A")
s2.push("B")
s2.push("C")

print(s1.name, s1.items)
print(s2.name, s2.items)
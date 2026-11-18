class Stack:
    def __init__(self, name):
        self.name = name
        self.items = []
        self.top = -1
        print(name, "created")

    def push(self, value):
        self.items.append(value)
        self.top += 1

    def show(self):
        print(self.name, self.items)

    def __del__(self):
        print(self.name, "destroyed")

s1 = Stack("S1")
s2 = Stack("S2")
s3 = Stack("S3")

s1.push(10)
s2.push(20)
s2.push(30)
s3.push(40)

stacks = [s1, s2, s3]

for s in stacks:
    s.show()

del stacks
del s
del s1
del s2
del s3
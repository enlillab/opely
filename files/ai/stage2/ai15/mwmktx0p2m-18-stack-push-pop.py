class Stack:
    def __init__(self):
        self.items = []
        self.top = -1

    def push(self, value):
        self.items.append(value)
        self.top += 1

    def pop(self):
        if self.top == -1:
            return "Empty"

        self.top -= 1
        return self.items.pop()

s = Stack()

s.push(10)
s.push(20)
s.push(30)

print(s.pop())
print(s.items)
print("Top:", s.top)
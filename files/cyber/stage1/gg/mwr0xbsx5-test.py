"""test.py - Simple Python test script.
Run: python3 test.py
"""

from dataclasses import dataclass


@dataclass
class Student:
    name: str
    score: int


def fibonacci(n: int) -> list[int]:
    seq = [0, 1]
    while len(seq) < n:
        seq.append(seq[-1] + seq[-2])
    return seq[:n]


def main() -> None:
    print("Hello from Python!")

    students = [Student("Alice", 92), Student("Bob", 78), Student("Sara", 85)]
    students.sort(key=lambda s: s.score, reverse=True)

    print("Students ranked by score:")
    for s in students:
        print(f"  {s.name}: {s.score}")

    avg = sum(s.score for s in students) / len(students)
    print(f"Average score: {avg:.2f}")
    print("First 10 Fibonacci numbers:", fibonacci(10))


if __name__ == "__main__":
    main()

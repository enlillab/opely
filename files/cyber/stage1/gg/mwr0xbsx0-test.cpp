// test.cpp - Simple C++ test program
// Build: g++ -std=c++17 test.cpp -o test && ./test

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

struct Student {
    std::string name;
    int score;
};

int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

int main() {
    std::cout << "Hello from C++!" << std::endl;

    std::vector<Student> students = {
        {"Alice", 92}, {"Bob", 78}, {"Sara", 85}
    };

    std::sort(students.begin(), students.end(),
              [](const Student& a, const Student& b) { return a.score > b.score; });

    std::cout << "Students ranked by score:" << std::endl;
    for (const auto& s : students) {
        std::cout << "  " << s.name << ": " << s.score << std::endl;
    }

    for (int i = 1; i <= 5; ++i) {
        std::cout << i << "! = " << factorial(i) << std::endl;
    }

    return 0;
}

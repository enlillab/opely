class BankAccount:
    balance = 0

    def deposit(self):
        self.balance += 100

    def withdraw(self):
        self.balance -= 50


account1 = BankAccount()
account2 = BankAccount()

account1.deposit()
account1.deposit()
account1.deposit()
account1.withdraw()

account2.deposit()
account2.deposit()
account2.withdraw()
account2.withdraw()

print(account1.balance)
print(account2.balance)
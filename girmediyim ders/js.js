const account = {
  owner: "Yusif",
  balance: 0,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount} AZN. New balance: ${this.balance} AZN`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Warning: Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount} AZN. New balance: ${this.balance} AZN`);
    }
  },

  checkBalance() {
    console.log(`Current balance: ${this.balance} AZN`);
  }
};
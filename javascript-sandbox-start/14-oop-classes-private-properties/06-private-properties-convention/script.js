class Wallet {
    constructor() {
        this._balance = 0;
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        this._balance -= amount;
    }

    getBalance() {
        return this._balance;
    }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.getBalance());

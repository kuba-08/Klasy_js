class KontoBankowe {
    #saldo = 0;
    
    deposit(amount)
    {
    this.#saldo += amount;
    }
    withdraw(amount)
    {
        if (amount > this.#saldo) {
            console.log("Nie wystarczjace srodki");
            return;
        }
        this.#saldo -= amount;
    }
    get saldo()
    {
        return this.#saldo;
    }
}
const konto = new KontoBankowe();
konto.deposit(2000);
konto.withdraw(2100);
console.log(konto.saldo);
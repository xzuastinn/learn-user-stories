
// Indictes the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
} 

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all bank accounts in the bank 
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank
     * @param {string} accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * creates a new account with a unique account number
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if(isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposit money into an account
     * @param accountNumber -- the account number to deposit money into
     * @param amount -- the amount to deposit
     * @returns the updated balance after deposit
     */
    public depositMoney(accountNumber: string, amount: number): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        account.balance += amount;
        return account.balance;
    }

    public withdrawalMoney(accountNumber: string, amount:number): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        account.balance -= amount;
        return account.balance;
    }

    /**
     * Check the balance of an account
     * @param accountNumber -- the account number to check
     * @returns the balance of the account
     */
    public checkBalance(accountNumber: string): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        return account.balance;
    }
}

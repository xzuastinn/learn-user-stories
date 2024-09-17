import Bank from "../src/bank";

//setup
const bank = new Bank();

//scenario 1
const account = bank.createAccount("John Doe", 29, "2938298");
if(account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
}
else {
    console.log("Scenario 1 failed");
}

//scenario 2
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_) {
    console.log("Scenario 2 passed");
}

//DEPOSIT TESTS

// Scenario 1: Successfully deposit money into an account
const account1 = bank.createAccount("Jane Doe", 30, "123456");
bank.depositMoney("123456", 200);
const balanceAfterDeposit = bank.checkBalance("123456");

if (balanceAfterDeposit === 200) {
    console.log("Scenario 1 passed: Successfully deposited money");
} else {
    console.log("Scenario 1 failed: Deposit did not work as expected");
}

// Scenario 2: Prevent negative deposit amounts
try {
    bank.depositMoney("123456", -100);
    console.log("Scenario 2 failed: Negative deposit was allowed");
} catch (error) {
    console.log("Scenario 2 passed: Negative deposit prevented");
}

// Scenario 3: Handle account balance being negative
bank.withdrawalMoney("123456", 300); // Withdraw more than the current balance to make it negative
const negativeBalance1 = bank.checkBalance("123456");

if (negativeBalance1 === -100) {
    console.log("Scenario 3 passed: Account balance can be negative");
} else {
    console.log("Scenario 3 failed: Account balance handling error");
}

// Now deposit to fix the negative balance
bank.depositMoney("123456", 200);
const newBalance1 = bank.checkBalance("123456");

if (newBalance1 === 100) {
    console.log("Scenario 3 passed: Successfully deposited money into negative balance account");
} else {
    console.log("Scenario 3 failed: Deposit into negative balance account did not work as expected");
}


// WITHDRAW TESTING

// Scenario 1: The balance should properly reflect positive or negative values
const account11 = bank.createAccount("Alice Doe", 25, "987654");
bank.depositMoney("987654", 100);  // Deposit some money

// Withdraw more than balance to make it negative
bank.withdrawalMoney("987654", 150);
let balance1 = bank.checkBalance("987654");

if (balance1 === -50) {
    console.log("Scenario 1 passed: Balance correctly reflects negative value");
} else {
    console.log("Scenario 1 failed: Balance does not reflect correct negative value");
}

// Scenario 2: The balance should change according to deposits and withdrawals

// Deposit some money
bank.depositMoney("987654", 200);
let balance2 = bank.checkBalance("987654");  // Declare new variable 'balance2'

if (balance2 === 150) {
    console.log("Scenario 2 (deposit) passed: Balance correctly updated after deposit");
} else {
    console.log("Scenario 2 (deposit) failed: Balance did not update correctly after deposit");
}

// Withdraw some money
bank.withdrawalMoney("987654", 50);
balance2 = bank.checkBalance("987654");  // Reuse 'balance2'

if (balance2 === 100) {
    console.log("Scenario 2 (withdrawal) passed: Balance correctly updated after withdrawal");
} else {
    console.log("Scenario 2 (withdrawal) failed: Balance did not update correctly after withdrawal");
}

// CHECK BALANCE TESTING 

// Scenario 1: The balance should properly reflect positive or negative values
const account2 = bank.createAccount("Alice Doe", 25, "987654");
bank.depositMoney("987654", 100);  // Deposit some money
bank.withdrawalMoney("987654", 150);  // Withdraw more than balance to make it negative
let balance = bank.checkBalance("987654");

if (balance === -50) {
    console.log("Scenario 1 passed: Balance correctly shows negative value");
} else {
    console.log("Scenario 1 failed: Balance does not reflect correct negative value");
}

// Scenario 2: The balance should change according to deposits and withdrawals
bank.depositMoney("987654", 200);  // Deposit some money
balance = bank.checkBalance("987654");

if (balance === 150) {
    console.log("Scenario 2 (deposit) passed: Balance correctly updated after deposit");
} else {
    console.log("Scenario 2 (deposit) failed: Balance did not update correctly after deposit");
}

bank.withdrawalMoney("987654", 50);  // Withdraw some money
balance = bank.checkBalance("987654");

if (balance === 100) {
    console.log("Scenario 2 (withdrawal) passed: Balance correctly updated after withdrawal");
} else {
    console.log("Scenario 2 (withdrawal) failed: Balance did not update correctly after withdrawal");
}

// Scenario 3: Handle account balance being negative
bank.withdrawalMoney("123456", 300); // Withdraw more than the current balance to make it negative
const negativeBalance = bank.checkBalance("123456");

if (negativeBalance === -100) {
    console.log("Scenario 3 passed: Account balance can be negative");
} else {
    console.log("Scenario 3 failed: Account balance handling error");
}

// Now deposit to fix the negative balance
bank.depositMoney("123456", 200);
const newBalance = bank.checkBalance("123456");

if (newBalance === 100) {
    console.log("Scenario 3 passed: Successfully deposited money into negative balance account");
} else {
    console.log("Scenario 3 failed: Deposit into negative balance account did not work as expected");
}

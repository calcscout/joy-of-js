const transaction = {
	sender: 'kevin@apecessories.com',
	recepient: 'alexey@apecessories.com',
};

const moneyTransaction = Object.create(transaction, {
	funds: {
		value: 5,
		enumerable: true,
		writable: true,
		configurable: false,
	},
});
// moneyTransaction.funds = 0.0;
moneyTransaction.addFunds = function addFunds(funds = 0) {
	this.funds += Number(funds);
};

moneyTransaction.addFunds(10);
console.log('Resulting funds:  ', moneyTransaction.funds);
console.log('Resulting sender:  ', moneyTransaction.sender);
transaction.sender = 'newkevin@apecessories.com';
console.log('Resulting sender:  ', moneyTransaction.sender);
console.log('Resulting funds:  ', moneyTransaction.funds);
console.log('Keys:  ', Object.keys(moneyTransaction));

const check = Object.getPrototypeOf(moneyTransaction) === transaction;
console.log('Prototype is transaction:  ', check);

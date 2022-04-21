const transaction = {
	sender: 'kevin@apecessories.com',
	recepient: 'alexey@apecessories.com',
};

const hashTransaction = Object.create(transaction);

hashTransaction.calculateHash = function calculateHash() {
	const data = [this.sender, this.recepient].join(' ');
	let hash = 0,
		i = 0;
	while (i < data.length) {
		hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
	}
	return hash ** 2;
};

const moneyTransaction = Object.setPrototypeOf({}, hashTransaction);
moneyTransaction.funds = 0.0;
moneyTransaction.addFunds = function addFunds(funds = 0) {
	this.funds += Number(funds);
};

moneyTransaction.addFunds(10);

console.log('Hash of transaction: ', hashTransaction.calculateHash());

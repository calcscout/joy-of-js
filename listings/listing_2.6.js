function Transaction(sender, recipient) {
	this.sender = sender;
	this.recipient = recipient;
}

Transaction.prototype.displayTransaction = function displayTransaction() {
	return `Transaction from ${this.sender} to ${this.recipient}`;
};

function HashTransaction(sender, recipient) {
	if (!new.target) {
		return new HashTransaction(sender, recipient);
	}
	Transaction.call(this, sender, recipient);
}

HashTransaction.prototype.calculateHash = function calculateHash() {
	const data = [this.sender, this.recepient].join(' ');
	let hash = 0,
		i = 0;
	while (i < data.length) {
		hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
	}
	return hash ** 2;
};

HashTransaction.prototype = Object.create(Transaction.prototype);
HashTransaction.prototype.constructor = HashTransaction;

const tx1 = new HashTransaction(
	'alexe@apecessories.com',
	'kevin@apcessories.com'
);
const tx2 = new HashTransaction(
	'alexe@apecessories.com',
	'kevin@apcessories.com'
);

const test1 = Transaction.prototype.isPrototypeOf(tx1);
const test2 = tx1.calculateHash === tx2.calculateHash;
const test3 = tx1.displayTransaction === tx2.displayTransaction;

console.log(test1, test2, test3);

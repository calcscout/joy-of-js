function Transaction(sender, recipient) {
	this.sender = sender;
	this.recipient = recipient;
}

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

const tx1 = new HashTransaction(
	'alexey@apecessories.com',
	'kevin@apcessories.com'
);
const tx2 = new HashTransaction(
	'alexey@apecessories.com',
	'kevin@apcessories.com'
);

const test1 = tx1.calculateHash === tx2.calculateHash;
const test2 = tx1.calculateHash() === tx2.calculateHash();

console.log('#####: functions are equal', test1);
console.log('#####: functions return same result', test2);

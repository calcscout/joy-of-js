const proto = {
	sender: 'alexey@apecessories.com',
};

const child = Object.create(proto);
child.recepient = 'kevin@apecessories.com';

console.log('Sender:  ', child.sender);
console.log('Recepient:  ', child.recepient);

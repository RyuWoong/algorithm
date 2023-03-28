const fs = require('fs');

function makeTestCase() {
	const input = fs.readFileSync('./q.txt', 'utf-8').split('\n');
	// const input = fs.readFileSync('./q.txt', 'utf-8').trim().split('\n');
	return input;
}

module.exports = makeTestCase;

const fs = require('fs');

function makeTestCase() {
	const input = fs.readFileSync('./q.txt', 'utf-8').split('\n');
	return input;
}

module.exports = makeTestCase;

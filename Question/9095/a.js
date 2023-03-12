const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();

testcases.shift();

function solution(testcases) {
	const list = testcases.map((item) => Number(item));
	const dump = { 1: 1, 2: 2, 3: 4 };

	function dist(value) {
		if (dump[value]) {
			return dump[value];
		}
		return dist(value - 1) + dist(value - 2) + dist(value - 3);
	}

	for (const tc of list) {
		console.log(dist(tc));
	}
}

solution(testcases);

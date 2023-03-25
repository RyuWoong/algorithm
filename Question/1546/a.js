const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const length = Number(testcases[0]);
	const list = testcases[1].split(' ').map((item) => Number(item));
	const max = Math.max(...list);
	const total = list.reduce((prev, next) => prev + (next / max) * 100, 0);

	console.log((total / length).toFixed(2));
}

solution(testcases);

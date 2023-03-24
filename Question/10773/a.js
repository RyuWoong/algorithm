const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const list = testcases.slice(1);
	const queue = [];
	for (const i of list) {
		const num = Number(i);
		if (num === 0) {
			queue.pop();
		} else {
			queue.push(num);
		}
	}
	console.log(queue.reduce((prev, next) => prev + next, 0));
}

solution(testcases);

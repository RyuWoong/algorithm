const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const num1 = Number(testcases[0]);
	const num2 = testcases[1].split('').reverse();

	for (const value of num2) {
		console.log(value * num1);
	}

	console.log(num1 * Number(testcases[1]));
}

solution(testcases);

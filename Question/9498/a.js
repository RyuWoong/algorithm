const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const value = testcases[0];
	if (value >= 90) {
		console.log('A');
		return;
	}
	if (value >= 80) {
		console.log('B');
		return;
	}
	if (value >= 70) {
		console.log('C');
		return;
	}
	if (value >= 60) {
		console.log('D');
		return;
	}
	console.log('F');
}

solution(testcases);

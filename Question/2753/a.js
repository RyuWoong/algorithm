const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	if ((testcases[0] % 4 === 0 && testcases[0] % 100 !== 0) || testcases[0] % 400 === 0) {
		console.log(1);
		return;
	}
	console.log(0);
	return;
}

solution(testcases);

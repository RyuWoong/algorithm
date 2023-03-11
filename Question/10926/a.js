const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();

function solution(testcases) {
	for (const testcase of testcases) {
		const answer = testcase + '??!';
		console.log(answer);
	}
}

solution(testcases);

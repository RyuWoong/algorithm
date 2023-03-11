const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const answer = testcases - (2541 - 1998);

	console.log(answer);
}

solution(testcases);

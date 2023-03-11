const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const answer = testcases[0].split(' ').reduce((acc, cur) => acc + Number(cur), 0);

	console.log(answer);
}

solution(testcases);

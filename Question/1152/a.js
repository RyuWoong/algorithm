const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	console.log(testcases[1].split(' ').filter((item) => item !== '').length);
}

solution(testcases);

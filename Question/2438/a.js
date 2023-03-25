const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const length = Number(testcases[0]);
	let count = 1;
	while (count <= length) {
		console.log('*'.repeat(count));
		count++;
	}
}

solution(testcases);

const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const length = testcases[0];
	const list = testcases[1]
		.split(' ')
		.map((item) => Number(item))
		.sort((a, b) => a - b);

	const answer = list.map((item, index) => {
		const sliceList = list.slice(0, index + 1);
		return sliceList.reduce((prev, next) => prev + next, 0);
	});

	console.log(answer.reduce((prev, next) => prev + next, 0));
}

solution(testcases);

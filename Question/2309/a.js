const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const list = testcases.map((item) => Number(item));
	const total = list.reduce((prev, next) => prev + next, 0);
	const remain = total - 100;
	for (let i = 0; i < list.length; i++) {
		for (let j = 1; j < list.length; j++) {
			const sum = list.reduce((prev, next, index) => prev + (index === i || index === j ? 0 : next), 0);
			if (sum === 100) {
				console.log(list[i], list[j]);
				const answer = list.filter((item, index) => ![i, j].includes(index)).sort((a, b) => a - b);
				console.log(answer.join('\n'));
				return;
			}
		}
	}
}

solution(testcases);

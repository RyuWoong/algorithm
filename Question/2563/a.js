const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const list = testcases.slice(1).map((i) => i.split(' ').map((j) => Number(j)));
	const awnser = new Array(101).fill(null).map((_) => Array.from({ length: 101 }).fill(0));
	for (const item of list) {
		for (let i = item[0]; i < item[0] + 10; i++) {
			for (let j = item[1]; j < item[1] + 10; j++) {
				awnser[i][j] = 1;
			}
		}
	}

	console.log(awnser.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + cur, 0), 0));
}

solution(testcases);

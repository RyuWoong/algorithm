const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const length = Number(testcases[0]);
	const list = testcases.slice(1).map((i) => i.split(' ').map((j) => Number(j)));
	const temp = new Array(length).fill(null).map((_, index) => Array.from({ length: index + 1 }).fill(0));
	temp[0] = [...list[0]];
	for (let i = 0; i < length - 1; i++) {
		for (let j = 0; j < list[i].length; j++) {
			const prev = temp[i][j];
			const num1 = list[i + 1][j];
			const num2 = list[i + 1][j + 1];
			temp[i + 1][j] = Math.max(temp[i + 1][j], prev + num1);
			temp[i + 1][j + 1] = Math.max(temp[i + 1][j + 1], prev + num2);
		}
	}

	console.log(Math.max(...temp[temp.length - 1]));
}

solution(testcases);

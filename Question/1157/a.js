const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const value = [...String(testcases[0]).toLocaleUpperCase()];
	const list = [...new Set(value)];
	let answer = { count: 0, value: null };
	for (const item of list) {
		const length = value.filter((_) => item === _).length;
		console.log(length);
		if (answer.count === length) {
			answer.count = length;
			answer.value = '?';
		}
		if (answer.count < length) {
			answer.count = length;
			answer.value = item;
		}
	}
	console.log(answer.value);
}

solution(testcases);

const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const [length, target] = testcases[0].split(' ');

	const list = testcases
		.slice(1)
		.filter((item) => Number(item) <= Number(target))
		.map((item) => Number(item))
		.sort((a, b) => b - a);
	const count = [];
	let remain = Number(target);
	for (const item of list) {
		count.push(Math.floor(remain / item));
		remain = target % item;
	}

	console.log(count.reduce((prev, next) => prev + next, 0));
}

solution(testcases);

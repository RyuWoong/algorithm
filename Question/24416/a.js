const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();

function solution(testcases) {
	const num = Number(testcases[0]);
	let count1 = 0;
	let count2 = 0;
	const dynamic = { 1: 1, 2: 1 };
	const fib = (num) => {
		if (num === 1 || num === 2) {
			count1 += 1;
			return 1;
		}
		return fib(num - 1) + fib(num - 2);
	};

	const fibonacci = (num) => {
		if (dynamic[num]) {
			return dynamic[num];
		}
		count2 += 1;
		const value = fibonacci(num - 1) + fibonacci(num - 2);
		dynamic[num] = value;
		return value;
	};
	fib(num);
	fibonacci(num);

	console.log(count1, count2);
}

solution(testcases);

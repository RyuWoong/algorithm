const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();

const getPrimes = (num) => {
	let arr = Array(num + 1)
		.fill(true)
		.fill(false, 0, 2);
	for (let i = 2; i * i <= num; i++) {
		if (arr[i]) {
			for (let j = i * i; j <= num; j += i) {
				arr[j] = false;
			}
		}
	}
	return arr.map((v, i) => (v ? i : 0)).filter((e) => e);
};
function solution(testcases) {
	const [num1, num2] = testcases[0].split(' ').map((item) => Number(item));
	const primes = getPrimes(num2).filter((item) => item >= num1);
	console.log(primes.join('\n'));
}

solution(testcases);

const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase()
	.slice(1)
	.map((item) => Number(item));

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
	const max = Math.max(...testcases);
	const primes = getPrimes(max);
	for (const value of testcases) {
		for (const prime of primes) {
			if (prime < value / 2) {
				continue;
			}
			const num = value - prime;
			if (primes.includes(num)) {
				console.log(num, prime);
				break;
			}
		}
	}
}

solution(testcases);

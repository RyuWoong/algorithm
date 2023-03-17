const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();

function solution(testcases) {
	const list = testcases.map((item) => item.split(' '));
	const length = list[0][0];
	const distances = list[1].map((item) => BigInt(item));
	const prices = list[2].map((item) => BigInt(item));

	// 처음 마을을 기준 점으로 잡고, 기름 값 싸지면 그때 넣고 간다.
	let price = prices[0];
	let total = 0n;
	for (let i = 0; i < length - 1; i++) {
		total += price * distances[i];
		if (price > prices[i + 1]) price = prices[i + 1];
	}
	console.log(String(total));
}

solution(testcases);

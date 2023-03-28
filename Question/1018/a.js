const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();
function solution(testcases) {
	const [length, line] = testcases[0].split(' ').map((item) => Number(item));
	const list = testcases.slice(1).map((item) => item.split(''));
	let answer = 64;
	for (let x = 0; x < length - 7; x++) {
		for (let y = 0; y < line - 7; y++) {
			console.log(x, y);
			let count1 = 0;
			let count2 = 0;
			for (let a = x; a < x + 8; a++) {
				for (let b = y; b < y + 8; b++) {
					if ((a + b) % 2 === 0) {
						if (list[a][b] !== 'B') {
							count1 += 1;
						}
						if (list[a][b] !== 'W') {
							count2 += 1;
						}
					} else {
						if (list[a][b] !== 'W') {
							count1 += 1;
						}
						if (list[a][b] !== 'B') {
							count2 += 1;
						}
					}
				}
			}
			answer = Math.min(count1, count2, answer);
		}
	}
	console.log(answer);
}

solution(testcases);

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const testcases = input;

solution(testcases);

function solution(testcases) {
	if ((testcases[0] % 4 === 0 && testcases[0] % 100 !== 0) || testcases[0] % 400 === 0) {
		console.log(1);
		return;
	}
	console.log(0);
	return;
}

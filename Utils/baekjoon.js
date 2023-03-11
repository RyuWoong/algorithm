const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const testcases = input;

solution(testcases);

function solution(testcases) {
	const value = testcases[0].split(' ');
	const num1 = Number(value[0]);
	const num2 = Number(value[1]);
	if (num1 === num2) {
		console.log('==');
		return;
	}
	if (num1 > num2) {
		console.log('>');
		return;
	}
	if (num1 < num2) {
		console.log('<');
		return;
	}
}

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin', 'utf-8').split('\n');
const testcases = input;

function solution(testcases) {
	const list = testcases
		.map((item) => {
			const [length, str] = item.split(' ');
			if (!str) {
				return '';
			}
			const answer = [...str].map((item) => String(item).repeat(Number(length)));
			return answer.join('');
		})
		.filter((item) => item !== '');

	console.log(list.join('\n'));
}

solution(testcases);

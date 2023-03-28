const makeTestCase = require('../../Utils/MakeTestCase');

// 해당 문제는 makeTeseCase에 Trim을 넣어줘야합니다.
const testcases = makeTestCase();
function solution(testcases) {
	const list = testcases.slice(1).map((item) => Number(item));
	const max = Math.max(...list);
	const answer = [
		[1, 0],
		[0, 1],
	];

	for (let i = 2; i <= max; i++) {
		const value0 = answer[i - 1][0] + answer[i - 2][0];
		const value1 = answer[i - 1][1] + answer[i - 2][1];
		answer.push([value0, value1]);
	}
	list.forEach((item) => console.log(answer[item][0] + ' ' + answer[item][1]));
}

solution(testcases);

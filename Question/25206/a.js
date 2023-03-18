const makeTestCase = require('../../Utils/MakeTestCase');

const testcases = makeTestCase();

const grades = {
	'A+': 4.5,
	A0: 4.0,
	'B+': 3.5,
	B0: 3.0,
	'C+': 2.5,
	C0: 2.0,
	'D+': 1.5,
	D0: 1.0,
	F: 0.0,
};

function solution(testcases) {
	const myGrade = testcases
		.map((item) => {
			const [title, number, grade] = item.split(' ');
			return { number, grade };
		})
		.filter((item) => item.grade !== 'P');

	const myNum = myGrade.reduce((prev, next) => prev + Number(next.number) * grades[next.grade], 0);
	const total = myGrade.reduce((prev, next) => prev + Number(next.number), 0);
	console.log(myNum / total);
}

solution(testcases);

const isEqualObj = (obj1, obj2) => {
	const obj1keys = Object.keys(obj1);
	const obj2keys = Object.keys(obj2);

	if (obj1keys.length !== obj2keys.length) return false;

	for (const key of obj1keys) {
		const value1 = obj1[key];
		const value2 = obj2[key];

		if (value1 !== value2) {
			return false;
		}
	}
	return true;
};

function solution(want, number, discount) {
	let list = {};
	// 초기화
	want.forEach((item, index) => {
		list[item] = number[index];
	});
	let answer = 0;
	let day = 0;

	while (day < discount.length - 9) {
		const discountList = discount.slice(day, day + 10);
		let discountObj = {};

		discountList.forEach((item, index) => {
			if (discountObj[item]) {
				discountObj[item] += 1;
			} else {
				discountObj[item] = 1;
			}
		});

		const isEqual = isEqualObj(list, discountObj);
		if (isEqual) {
			answer += 1;
		}

		day++;
	}

	return answer;
}

console.log(
	solution(
		['banana', 'apple', 'rice', 'pork', 'pot'],
		[3, 2, 2, 2, 1],
		[
			'chicken',
			'apple',
			'apple',
			'banana',
			'rice',
			'apple',
			'pork',
			'banana',
			'pork',
			'rice',
			'pot',
			'banana',
			'apple',
			'banana',
		],
	),
);

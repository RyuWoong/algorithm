function Solution(progresses, speeds) {
	let list = progresses.map((item, index) => item + speeds[index]);
	const result = [];
	let total = 0;
	let count = 0;
	let pointer = 0;
	while (total < progresses.length) {
		list = list.map((item, index) => item + speeds[index]);

		while (list[pointer] >= 100) {
			count++;
			pointer++;
			total++;
		}

		result.push(count);
		count = 0;
	}
	return result.filter((item) => item);
}

console.log(Solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

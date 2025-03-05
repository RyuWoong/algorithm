function Solution(enroll, referral, seller, amount) {
	// enroll - 판매원 이름 배열
	// referral - 다단계 조직에 참여 시킨 판매원
	// seller - 판매량 집계
	// amount - 판매 수량

	const BENEFIT = 100;
	const tree = {};

	enroll.forEach((item, index) => {
		tree[item] = referral[index];
	});

	// 이익 금액
	const benefitTree = {};

	seller.forEach((item, index) => {
		benefitTree[item] = amount[index] * BENEFIT;
	});

	// 판매원 전원 각 이익금 트리
	const enrolltree = { '-': 0 };

	for (const one of enroll) {
		if (benefitTree[one]) {
			enrolltree[one] = benefitTree[one];
		} else {
			enrolltree[one] = 0;
		}
	}

	for (const one of enroll.reverse()) {
		//판매원 금액이 0원이면 pass
		// 0원 이상이면 10% 추천인에게 적립
		const earn = enrolltree[one];
		if (earn) {
			const cost = Math.floor(earn * 0.1);
			enrolltree[one] = earn - cost;
			const recommand = tree[one];
			enrolltree[recommand] += cost;
		}
	}
	return enroll.reverse().map((item) => enrolltree[item]);
}

export default Solution;

const result1 = Solution(
	['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
	['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
	['young', 'john', 'tod', 'emily', 'mary'],
	[12, 4, 2, 5, 10],
);
const result2 = Solution(
	['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
	['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
	['sam', 'emily', 'jaimie', 'edward'],
	[2, 3, 5, 4],
);

console.log(result1);
console.log(result2);

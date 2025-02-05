class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	push(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}

	pop() {
		if (!this.head) {
			return null;
		}

		const value = this.head;
		this.head = this.head.next;

		if (!this.head) {
			this.tail = null;
		}

		this.size--;
		return value.value;
	}
}

function Solution(N, K) {
	const list = Array.from({ length: N }).map((item, index) => index + 1);
	const queue = new Queue();
	list.forEach((item) => {
		queue.push(item);
	});

	let count = 0;
	while (queue.size > 1) {
		count++;
		if (count === K) {
			count = 0;
			queue.pop();
		} else {
			const value = queue.pop();
			queue.push(value);
		}
	}
	console.log(queue.head, queue.tail);
	return queue.head.value;
}

console.log(Solution(5, 2));

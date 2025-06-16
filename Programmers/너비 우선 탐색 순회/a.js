class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const testcase = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
];

function solution(testcase) {
  const graph = {};
  const queue = new Queue();
  const visited = new Set();
  const result = [];

  testcase.forEach(([a, b]) => {
    if (!graph[a]) graph[a] = [];
    graph[a].push(b);
  });

  queue.push(0);

  while (!queue.isEmpty()) {
    const current = queue.pop();
    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);
      (graph[current] || []).forEach((newNode) => queue.push(newNode));
    }
  }

  return result;
}

console.log(solution(testcase));

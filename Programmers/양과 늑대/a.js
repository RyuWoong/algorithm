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

class Node {
  constructor(location, sheep, wolf, visited) {
    this.location = location;
    this.sheep = sheep;
    this.wolf = wolf;
    this.visited = visited;
  }
}

function makeTree(info, edges) {
  const tree = new Array(info.length).fill(0).map((item) => []);

  for (const edge of edges) {
    const [root, child] = edge;
    tree[root].push(child);
  }

  return tree;
}

function Solution(info, edges) {
  // 트리를 제작 하자.
  const tree = makeTree(info, edges);

  // 트리를 탐색 하자
  // 만약 양(0)과 늑대(1) 숫자가 같으면 종료
  // 최대로 모을 수 있는 양의 갯 수

  const queue = new Queue();
  let maxSheep = 0;
  queue.push(new Node(0, 1, 0, new Set()));

  while (!queue.isEmpty()) {
    const { location, sheep, wolf, visited } = queue.pop();
    console.log(location, sheep);
    maxSheep = Math.max(maxSheep, sheep);

    for (const child of tree[location]) {
      visited.add(child);
    }

    for (const child of visited) {
      const type = info[child];

      if (type === 0) {
        // 양이라면
        const newVisited = new Set(visited);
        newVisited.delete(child);
        queue.push(new Node(child, sheep + 1, wolf, newVisited));
      } else {
        // 늑대라면
        if (wolf + 1 < sheep) {
          const newVisited = new Set(visited);
          newVisited.delete(child);
          queue.push(new Node(child, sheep, wolf + 1, newVisited));
        }
      }
    }
  }
  return maxSheep;
}

console.log(
  Solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);

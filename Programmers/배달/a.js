class Miniheap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown(); // 제 정렬
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    const parent = Math.floor((this.size() - 1) / 2);
    while (index > 0) {
      if (this.items[parent] <= this.items[index]) {
        break;
      }
      this.swap(index, parent);
      index = parent;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;

      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(N, road, K) {
  // 최대 마을 수, 길 (마을,마을,거리), 최대 거리

  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = Array(N + 1).fill(Infinity);
  distance[1] = 0;

  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  const heap = new Miniheap();
  heap.insert([0, 1]); // 출발점

  while (heap.size() > 0) {
    const [dist, node] = heap.pop();

    for (const [nextNode, nextDist] of graph[node]) {
      const cost = dist + nextDist;
      if (cost < distance[nextNode]) {
        distance[nextNode] = cost;
        heap.insert([cost, nextNode]);
      }
    }
  }

  return distance.filter((dist) => dist <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
// 4

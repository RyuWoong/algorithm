const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();
function solution(testcases) {
  // 정답 작성
  const [info, ...arr] = testcases;
  const [length, line, start] = info.split(" ").map((item) => +item);
  let graph = Array.from({ length: length + 1 }, () => []);

  for (const node of arr) {
    const [a, b] = node.split(" ").map((item) => +item);
    graph[a].push(b);
    graph[b].push(a);
  }

  const dfs = () => {
    const visited = [];
    const queue = [start];

    while (queue.length) {
      const value = queue.shift();
      const nodes = graph[value]
        .filter((item) => !visited.includes(item))
        .sort((a, b) => b - a);
      for (const node of nodes) {
        queue.unshift(node);
      }
      if (!visited.includes(value)) {
        visited.push(value);
      }
    }
    return visited;
  };

  const bfs = () => {
    const visited = [];
    const queue = [start];

    while (queue.length) {
      const value = queue.shift();
      const nodes = graph[value]
        .filter((item) => !visited.includes(item))
        .sort((a, b) => a - b);
      for (const node of nodes) {
        queue.push(node);
      }
      if (!visited.includes(value)) {
        visited.push(value);
      }
    }
    return visited;
  };
  const dfsArr = dfs();
  const bfsArr = bfs();
  console.log([dfsArr.join(" "), bfsArr.join(" ")].join("\n"));
}
solution(testcases);

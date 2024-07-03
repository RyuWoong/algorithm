const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  let [info, ...arr] = testcases;
  const [u, v, r] = info.split(" "); // 정점수, 간선수, 시작지점
  const graph = Array.from({ length: Number(u) + 1 }, () => []);
  for (let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  graph.forEach((line) => line.sort((a, b) => b - a));

  const visited = new Array(+u + 1).fill(0);
  let dep = 1;
  const dfs = (start) => {
    visited[start] = dep;
    for (const target of graph[start]) {
      if (!visited[target]) {
        dep++;
        dfs(target);
      }
    }
    return;
  };
  dfs(Number(r));
  console.log(visited.slice(1).join("\n"));
}

solution(testcases);

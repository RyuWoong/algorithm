function solution(n, computers) {
  const visited = new Set();
  let network = 0;
  const dfs = (computers, visited, node) => {
    visited.add(node);
    const list = computers[node];
    for (const idx in list) {
      // 0이거나 이미 방문했다면 패스.
      if (list[idx] && !visited.has(idx)) {
        dfs(computers, visited, idx);
      }
    }
  };

  for (const idx in computers) {
    // 방문 하지 않은 경우 방문.
    if (!visited.has(idx)) {
      dfs(computers, visited, idx);
      network++;
    }
  }

  return network;
}

const result = solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

console.log(result);

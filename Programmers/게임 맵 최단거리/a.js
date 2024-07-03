const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const maps = testcases.map((item) => item.split(" ").map((item) => +item));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const visited = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(false)
  );
  const dist = Array.from({ length: maps.length }, () =>
    new Array(maps[0].length).fill(0)
  );

  visited[0][0] = true;
  const queue = [];
  dist[0][0] = 1;

  dist[0][0] = 1;
  queue.push([0, 0]);
  while (queue.length > 0) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const x = curX + dx[i];
      const y = curY + dy[i];

      //좌표위치가 게임 맵 지도내에 있고,
      if (x > -1 && x < maps.length && y > -1 && y < maps[0].length) {
        //현재 좌표로 상하좌우 중 탐색 가능한 좌표라면
        if (maps[x][y] === 1 && !visited[x][y]) {
          //큐에 좌표값을 넣어줍니다.
          queue.push([x, y]);
          visited[x][y] = true;

          //먼저 탐색하지 않았다면
          if (dist[x][y] === 0) {
            dist[x][y] = dist[curX][curY] + 1;
          }
        }
      }
    }
  }
  return dist[maps.length - 1][maps[0].length - 1] || -1;
}

console.log(solution(testcases));

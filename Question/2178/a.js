const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const [end, ...list] = testcases;

  const 시작지점 = [0, 0, 1];
  const 종료지점 = end.split(" ").map((item) => +item - 1);
  const [endX, endY] = 종료지점;
  const board = list.map((item) => item.split("").map((item) => +item - 1));

  // 시작지점 0.0 부터 종료지점까지 가는 최단거리 구하기.
  const queue = [시작지점];
  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();
    if (x > -1 && x <= endX && y > -1 && y <= endY) {
      if (board[x][y] === 0) {
        board[x][y] = dist;
        const 누적거리 = dist + 1;
        queue.push([x + 1, y, 누적거리]);
        queue.push([x - 1, y, 누적거리]);
        queue.push([x, y + 1, 누적거리]);
        queue.push([x, y - 1, 누적거리]);
      }
    }
  }
  console.log(board[endX][endY]);
}

solution(testcases);

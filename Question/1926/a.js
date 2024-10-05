const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();
function solution(testcases) {
  // 정답 작성
  const range = [-1, 1];
  const [size, ...source] = testcases;
  const [sizeX, sizeY] = size.split(" ").map((item) => +item);
  const track = {};
  const board = source.map((item) => item.split(" ").map((item) => +item));

  const checkDuplication = (x, y, track) => {
    const location = `${x}-${y}`;
    const value = track[location];
    if (!value) {
      track[location] = 1;
      return false;
    } else {
      return true;
    }
  };

  const bfs = (starting, track, board) => {
    let count = 0; // 영역 넓이 계산
    const queue = [];
    queue.push(starting);
    while (queue.length > 0) {
      const { x, y } = queue.pop();
      if (x > -1 && x < sizeX) {
        if (y > -1 && y < sizeY) {
          if (board[x][y] === 1) {
            // 1인 경우에 추적한다.
            // 이미 확인했다면 끝, 아니라면 범위를 넓혀서 탐색한다.
            const isAlready = checkDuplication(x, y, track);
            if (!isAlready) {
              count += 1;
              for (const item of range) {
                queue.push({
                  x: x,
                  y: y + item,
                });
              }
              for (const item of range) {
                queue.push({
                  x: x + item,
                  y: y,
                });
              }
            }
          }
        }
      }
    }
    return count;
  };

  let max = 0;
  let pictureCount = 0;
  board.forEach((line, x) => {
    line.forEach((node, y) => {
      const count = bfs({ x, y }, track, board);
      if (count > 0) {
        pictureCount += 1;
      }
      max = Math.max(max, count);
    });
  });

  console.log(`${pictureCount}\n${max}`);
}

solution(testcases);

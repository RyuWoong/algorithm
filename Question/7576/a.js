const makeTestCase = require("../../Utils/MakeTestCase");
const testcases = makeTestCase();

// 시간이 너무 많이 소비되기 때문에 단축 할 수 있는 방법을 기록.

// for of로 시작구간을 체크하면서, 총 0의 갯수를 확인하고, 토마토를 익게 만들면서 익은 토마토 갯수를 체크하여 모든 토마토가 익었는지 비교할 수 있다.
// 따라서 맨 아래 익지 않은 토마토가 있는지 확인하는 구간을 단축.

function solution(testcases) {
  // 정답 작성
  const [size, ...list] = testcases;
  const [maxY, maxX] = size.split(" ").map((item) => +item);
  const board = list.map((item) => item.split(" ").map((item) => +item));

  const queue = [];
  let pointer = 0;
  let count = 0;
  let isEmpty = false;
  board.forEach((xitem, x) => {
    xitem.forEach((yitem, y) => {
      if (yitem === 1) {
        queue.push([x, y, 0]);
        board[x][y] = 0;
      }
    });
  });

  // 시작점. 1인 애들만 먼저 큐에 담아 순서대로 처리한다.
  // 단 큐에 담으면, 0으로 초기화 한다.

  while (queue.length > pointer) {
    const [x, y, day] = queue[pointer];
    pointer += 1;
    const value = board[x][y];
    if (value === 0) {
      board[x][y] = 1;
      count = Math.max(count, day);
      if (x + 1 < maxX && board[x + 1][y] === 0)
        queue.push([x + 1, y, day + 1]);
      if (x - 1 >= 0 && board[x - 1][y] === 0) queue.push([x - 1, y, day + 1]);
      if (y + 1 < maxY && board[x][y + 1] === 0)
        queue.push([x, y + 1, day + 1]);
      if (y - 1 >= 0 && board[x][y - 1] === 0) queue.push([x, y - 1, day + 1]);
    }
  }

  // 비어있는 칸이 있는지 찾기,
  board.forEach((xItem) =>
    xItem.forEach((yItem) => {
      if (yItem === 0) {
        isEmpty = true;
        return;
      }
    })
  );

  if (isEmpty) {
    console.log(-1);
    return;
  }

  console.log(count);
}

solution(testcases);

const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성

  // 1. 첫번째 줄에는 집의 갯수
  // 2. 두번째 줄부터는 각 집의 색깔의 비용
  // 3. 인접한 집은 같은 색깔이 되면 안된다.

  const [n, ...costs] = testcases;

  const list = costs.map((cost) => cost.split(" ").map((v) => +v));
  const arr = new Array(list.length).fill(0).map(() => new Array(3).fill(0));
  arr[0] = list[0];
  for (let i = 1; i < list.length; i++) {
    // 최대 3개씩 읽으며 최소값을 찾는다.

    arr[i][0] = Math.min(arr[i - 1][1], arr[i - 1][2]) + list[i][0];
    arr[i][1] = Math.min(arr[i - 1][0], arr[i - 1][2]) + list[i][1];
    arr[i][2] = Math.min(arr[i - 1][0], arr[i - 1][1]) + list[i][2];
  }

  console.log(Math.min(...arr[costs.length - 1]));
}

solution(testcases);

const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  // 1. 계단 오르기 게임.
  // 2. 아래 시작점 부터 계단 꼭대기에 위치한 도착점까지, 각각 계단에는 일정한 점수가 쓰여져 있다.
  // 3. 계단을 밟으면 그 계단에 쓰여 있는 점수를 얻게 된다.
  // 4. 만약 1,2,4,6번째 계단을 밟아 도착점 도달시 점수는 10 + 20 + 25 + 20 = 75 가 된다.
  // 규칙
  // 1. 계단은 한번에 한 계단 혹은 두 계단씩 오를 수 있다.
  // 2. 연속된 세 개의 계단을 모두 밟아서는 안된다.
  // 3. 마지막 도착 계단은 반드시 밟아야 한다.

  const [total, ...list] = testcases.map((item) => +item);

  const dp = new Array(total + 1).fill(null).map(() => [0, 0]);

  for (let i = 1; i <= total; i++) {
    if (i === 1) {
      // 초기 값은, 1번 밟거나 1번을 건너뛰는 경우.
      dp[i][0] = list[i - 1];
      dp[i][1] = 0;
    } else {
      // 1번을 밟고 이어 밟는 경우, 건너뛰고 밟는 경우.
      dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + list[i - 1];
      dp[i][1] = dp[i - 1][0] + list[i - 1];
    }
  }
  console.log(Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1]));
}

solution(testcases);

const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();
function solution(testcases) {
  const [info, ...list] = testcases;
  const [length, total] = info.split(" ").map((item) => +item);
  const coins = list.map((item) => +item).sort((a, b) => a - b);
  const min = Math.min(...coins);
  const history = { [min]: 1 };

  // 동전의 최소 값 부터 ~ 올라가며 만들 수 있는 경우의 수를 찾는다.
  // 테스트 케이스 상 1부터 시작.
  for (let i = min; i <= total; i++) {
    // 이전에 계산된 값이 있다면 빼고 남은 값을 계산한다.
    const keys = Object.keys(history);
    for (const key of keys) {
      // 최소값에서 있는 값을 뺏을 때 남은 값으로 +해서 경우의 수가 계산 되는가?
      if (!history[key]) {
        break;
      }
      let value = history[key];
      const pointer = i - key;
      if (!history[pointer]) {
        if (!coins.includes(pointer)) {
          continue;
        }
        value += 1;
        history[i] = value;
        continue;
      }
      value += history[pointer];
      history[i] = value;
    }
  }
  console.log(history);
}
solution(testcases);

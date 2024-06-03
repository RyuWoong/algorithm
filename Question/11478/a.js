const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성

  const tc = testcases[0];
  // 모든 경우의 수를 배열로 만들고 중복을 제거한다.
  const arr = [];
  for (let i = 1; i <= tc.length; i++) {
    for (let j = 0; j < tc.length; j++) {
      if (j + i > tc.length) {
        break;
      }
      // 앞에가 한칸씩 움직이며 뒷자리가 i만큼 더해짐

      const value = tc.slice(j, j + i);
      arr.push(value);
    }
  }
  console.log(new Set(arr).size);
}

solution(testcases);

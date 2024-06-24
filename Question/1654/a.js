const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 첫번째 줄엔 가지고 있는 전선의 갯수와 만들어야하는 전선 수
  // 두번째 줄 부터 가지고 있는 전선의 길이가 나열된다.
  const [info, ...lineLengths] = testcases;
  const [k, total] = info.split(" ").map((item) => parseInt(item));
  const lines = lineLengths.map((item) => parseInt(item));

  let max = Math.max(...lines);
  let min = 1;

  while (min <= max) {
    let mid = parseInt((max + min) / 2);
    let pieces = lines
      .map((line) => parseInt(line / mid))
      .reduce((a, b) => a + b, 0);
    if (pieces >= total) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  console.log(max);
}

solution(testcases);

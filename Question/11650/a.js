const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [length, ...arr] = testcases;
  const list = arr
    .map((item) => item.split(" ").map((item) => parseInt(item)))
    .sort((a, b) => {
      const [x1, y1] = a;
      const [x2, y2] = b;
      if (x1 > x2) {
        return 1;
      }
      if (x2 > x1) {
        return -1;
      }
      if (y1 > y2) {
        return 1;
      }
      return -1;
    });
  console.log(list.map((item) => item.join(" ")).join("\n"));
}

solution(testcases);

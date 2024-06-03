const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const list = [...new Set(testcases.slice(1))];
  const arr = list.sort((a, b) => {
    if (a.length === b.length) {
      if (a > b) {
        return 1;
      }
      return -1;
    }
    return a.length - b.length;
  });
  console.log(arr.join("\n"));
}

solution(testcases);

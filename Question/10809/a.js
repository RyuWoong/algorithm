const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const tc = testcases[0];
  const arr = Array.from({ length: 122 - 97 + 1 }, (_, index) =>
    tc.indexOf(String.fromCharCode(97 + index))
  );
  console.log(arr.join(" "));
}

solution(testcases);

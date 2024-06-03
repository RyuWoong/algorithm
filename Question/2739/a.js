const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [tc] = testcases;
  const arr = Array.from(
    { length: 9 },
    (_, index) => `${tc} * ${index + 1} = ${tc * (index + 1)}`
  );
  console.log(arr.join("\n"));
}

solution(testcases);

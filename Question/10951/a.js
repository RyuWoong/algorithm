const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const [...tc] = testcases;
  const nums = tc.map((item) =>
    item.split(" ").reduce((prev, curr) => prev + parseInt(curr), 0)
  );
  console.log(nums.join("\n"));
}

solution(testcases);

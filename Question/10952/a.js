const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  console.log(
    testcases
      .slice(0, testcases.length - 1)
      .map((item) => {
        const [num1, num2] = item.split(" ").map((num) => parseInt(num));
        return num1 + num2;
      })
      .join("\n")
  );
}

solution(testcases);

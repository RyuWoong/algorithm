const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const strs = [
    `         ,r'"7`,
    `${"r`-_   ,'  ,/"}`,
    ` ${"\\"}. ". L_r'`,
    `${"   `~\\/"}`,
    "      |",
    "      |",
  ];
  console.log(strs.join("\n"));
}

solution(testcases);

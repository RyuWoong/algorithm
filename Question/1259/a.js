const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const answer = testcases
    .slice(0, -1)
    .map((item) =>
      String(item) === item.split("").reverse().join("") ? "yes" : "no"
    );

  console.log(answer.join("\n"));
}

solution(testcases);

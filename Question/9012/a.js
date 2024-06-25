const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const [length, ...arr] = testcases;
  const list = arr.map((item) => {
    let count = 0;
    for (const point of item) {
      if (point === "(") {
        count += 1;
      } else {
        if (count > 0) {
          count -= 1;
        } else {
          return "NO";
        }
      }
    }
    if (count !== 0) {
      return "NO";
    }
    return "YES";
  });
  console.log(list.join("\n"));
}

solution(testcases);

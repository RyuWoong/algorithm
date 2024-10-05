const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // aya ye woo ma
  // 연속해서 발음하기 어려워함.
  let count = 0;

  const 발음변환 = (str) =>
    str
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");

  testcases.forEach((item) => {
    let flag = true;
    let 변환된발음 = 발음변환(item).split("");
    if (!isNaN(Number(변환된발음.join("")))) {
      while (변환된발음.length !== 0) {
        const 반환발음 = 변환된발음.pop();
        const 끝발음 = 변환된발음[변환된발음.length - 1];
        if (반환발음 === 끝발음) {
          console.log(반환발음, 끝발음);
          flag = false;
          break;
        }
      }
      if (flag) {
        count += 1;
      }
    }
  });

  return count;
}

console.log(solution(testcases));

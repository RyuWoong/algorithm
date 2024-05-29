const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const question = Number(testcases);
  //만약 1이라면 조합할 수 있는 것이 없다.
  if (question === 1) {
    console.log(0);
    return;
  }
  // 서로 다른 색상을 입어한다.
  // 같은 색상을 입는 경우는 가지수 만큼.
  // 가지수 * 가지수 - 가지수
  console.log(question * question - question);
}

solution(testcases);

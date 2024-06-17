const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  let count = 1;
  let result = 666;
  let incount = 1;
  let i = 0;
  // 666 1666 2666 3666 4666 5666 6660 6661 6662 6663 6664 6665 6666 6667 6668 6669 7666 8666 9666 10666 11666 12666 13666 14666 15666 16660
  while (count < Number(testcases[0])) {
    if (incount % 1000 == 666) {
      result =
        i > 100
          ? `${incount}${i}`
          : i > 10
          ? `${incount}0${i}`
          : `${incount}00${i}`;
      count += 1;
      i += 1;
      if (i === 1000) {
        incount += 1;
      }
    } else if (incount % 100 == 66) {
      result = i > 10 ? `${incount}6${i}` : `${incount}60${i}`;
      count += 1;
      i += 1;
      if (i === 100) {
        incount += 1;
      }
    } else if (incount % 10 === 6) {
      result = `${incount}66${i}`;
      count += 1;
      i += 1;
      if (i === 10) {
        incount += 1;
      }
    } else {
      result = incount + `${666}`;
      i = 0;
      count += 1;
      incount += 1;
    }
  }

  console.log(result);
}

solution(testcases);

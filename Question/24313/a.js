const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  // 정답 작성
  const tc = testcases.map((item) =>
    item.split(" ").map((item) => Number(item))
  );

  const cal = (value) => {
    const [a, c, n] = value;
    const [a1, a0] = a;

    const gnlist = Array.from(
      { length: 101 - n },
      (_, index) => Number(n) + index
    );
    for (const n0 of gnlist) {
      if (a1 * n0 + a0 > c * n0) {
        console.log(0);
        return;
      }
    }
    console.log(1);
  };
  cal(tc);
}

solution(testcases);

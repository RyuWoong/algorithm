const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const [length, ...squar] = testcases;
  const arr = squar.map((item) => item.split(" "));
  const result = { 0: 0, 1: 0 };
  // 시작점 , 진행 값
  const slice = (point, value) => {
    const [x, y] = point;
    // 좌표 x, y 부터 value 까지 이동하면서 하나의 값만 있는지 확인
    // 하나의 값만 있는게 아니라면, 좌표를 절반으로 나누고, value도 절반으로 나눈다
    const standard = arr[x][y];
    let flag = true;
    if (value === 1) {
      result[standard] += 1;
      return;
    }
    outerLoop: for (let x1 = x; x1 < x + value; x1++) {
      for (let y1 = y; y1 < y + value; y1++) {
        if (arr[x1][y1] !== standard) {
          flag = false;
          break outerLoop;
        }
      }
    }
    if (flag) {
      result[standard] += 1;
    } else {
      const harf = value / 2;
      slice([x, y], harf); // 0,0 4
      slice([x, y + harf], harf); // 0,4 4
      slice([x + harf, y], harf); // 4,0 4
      slice([x + harf, y + harf], harf); // 4,4 ,4
    }
  };

  slice([0, 0], Number(length));
  console.log(Object.values(result).join("\n"));
}

solution(testcases);

const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function solution(testcases) {
  const tc = Number(testcases[0]);
  // 3 이면 1x1사이즈의 가운데 공백 22
  // 9 이면 3x3사이즈의 가운데 공백  444546 545556 646566
  const arr = Array.from({ length: tc }, () => Array(tc).fill("*"));

  const makeBlank = (col, row, n) => {
    if (n === 1) {
      return;
    }
    const size = n / 3;

    const newCol = col % n; // 0~2
    const newRow = row % n; // 0~2

    const start = size; // 1
    const end = n - size; // 1;

    if (start <= newCol && end > newCol && start <= newRow && end > newRow) {
      arr[col][row] = " ";
    }
    makeBlank(col, row, size);
  };

  for (let i = 0; i < tc; i++) {
    for (let j = 0; j < tc; j++) {
      makeBlank(i, j, tc);
    }
  }
  console.log(arr.map((item) => item.join("")).join("\n"));
}

solution(testcases);

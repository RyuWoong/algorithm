const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();

function push(num, list, memory) {
  memory.push("+");
  list.push(num);
}

function pop(list, memory) {
  memory.push("-");
  return list.pop();
}

function solution(testcases) {
  const [length, ...arr] = testcases;
  let max = 0;
  const stack = [];
  const history = [];

  const list = arr.map((item) => Number(item));

  for (const num of list) {
    const isInclude = stack.includes(num);
    if (num < max && !isInclude) {
      console.log("NO");
      return;
    }

    if (isInclude) {
      while (true) {
        const popnum = pop(stack, history);
        if (popnum === num) {
          break;
        }
      }
    } else {
      for (let i = max + 1; i <= num; i++) {
        push(i, stack, history);
      }
      max = Math.max(max, num);
      if (stack[stack.length - 1] === num) {
        pop(stack, history);
      } else {
        console.log("NO");
        return;
      }
    }
  }
  console.log(history.join("\n"));
}

solution(testcases);

const makeTestCase = require("../../Utils/MakeTestCase");

const testcases = makeTestCase();
function solution(testcases) {
  const phone_book = testcases;
  const books = phone_book.sort();

  let answer = true;

  books.forEach((item, index) => {
    if (index === 0) {
      return;
    }
    const prev = books[index - 1];
    const length = prev.length;
    const front = item.slice(0, length);
    if (prev === front) {
      answer = false;
      return;
    }
  });
  return answer;
}
solution(testcases);

/**
 * @param {number} n
 * @return {number}
 */

function factorial(n) {
  if (n === 0 || n === 1) {
    return num = 1;
  }
  return num = n * factorial(n - 1);
}

function trailingZeroes(num) {
  let count = 0;
  const numStr = String(num);
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] === '0') {
      count++;
    } else {
      break;
    }
  }
  return count;
}
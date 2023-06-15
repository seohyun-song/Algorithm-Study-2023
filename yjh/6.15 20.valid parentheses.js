/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  const stack = [];
  const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let char of s) {
      if (char in brackets) {
          stack.push(char);
      } else {
          if (stack.length === 0) {
              return false;
          }

          const top = stack.pop();
          if (brackets[top] !== char) {
              return false;
          }
      }
  }
  return stack.length === 0;
};

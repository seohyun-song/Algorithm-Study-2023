/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if (n === 1) {
        return n;
    } else {
        return n * trailingZeroes(n-1);
    }
};

return trailingZeroes(n)
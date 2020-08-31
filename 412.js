/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result[i - 1] = '';
        if (!(i % 3)) result[i - 1] += 'Fizz';
        if (!(i % 5)) result[i - 1] += 'Buzz';
        if (!result[i - 1]) result[i - 1] += i;
    }
    return result;
};
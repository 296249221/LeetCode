/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var count  = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            count += (prices[i + 1] - prices[i]);
        }
    }
    return count;
};
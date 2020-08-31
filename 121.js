/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let result = 0;
    let left = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < left) 
            left = prices[i];
        else if (result < prices[i] - left) 
            result = prices[i] - left;
    }
    return result;
};
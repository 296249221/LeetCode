/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = String(x);
    var negative;
    if (x.charAt() === '-') {
        negative = true;
        x = x.substr(1);
    }
    x = x.split('').reverse().join('');
    if (x.length === 10) {
        if (negative) {
            for (let i = 0; i < 10; i++) {
                if (x.charAt(i) > String(Math.pow(2, 30) + Math.pow(2, 30)).charAt(i)) {
                    return 0;
                } else if (x.charAt(i) < String(Math.pow(2, 30) - 1 + Math.pow(2, 30)).charAt(i)) {
                    return Number('-' + x);
                }
            }
        } else {
            for (let i = 0; i < 10; i++) {
                if (x.charAt(i) > String(Math.pow(2, 30) - 1 + Math.pow(2, 30)).charAt(i)) {
                    return 0;
                } else if (x.charAt(i) < String(Math.pow(2, 30) - 1 + Math.pow(2, 30)).charAt(i)) {
                    return Number(x);
                }
            }
        }
    } else {
        return Number(negative ? '-' + x : x);
    }
};
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let floor = 1;
        if (isBadVersion(1)) return 1;
        while(true) {
            if (n - floor === 1) {
                return n;
            }
            if (isBadVersion(floor + Math.floor((n - floor) / 2))) {
                n = floor + Math.floor((n - floor) / 2);
            } else {
                floor = floor + Math.floor((n - floor) / 2);
            }
        }
    };
};
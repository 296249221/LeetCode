/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    for (var i = 0; i < len; i++) {
        matrix[i].splice(0, i);
        for (var j = 0; j < len; j++) {
            matrix[i].unshift(matrix[j][i]);
        }
        matrix[i].splice(len, 1);
        for (var k = len - i; k < len; k++) {
            matrix[i][k] = matrix[len - k - 1][len];
            matrix[len - k - 1].splice(len, 1);
        }
    }
    return matrix;
};
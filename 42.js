/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 3) return 0;
    let max = height[0];
    let maxIndex = 0;
    let heightClone = [...height];
    let heightAnd = height[0];
    for (let i = 1; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i];
            maxIndex = i;
        }
        heightAnd += height[i];
    }
    if (max === height[0] && max === height[height.length - 1])
        return max * height.length - heightAnd;
    for (let j = 1; j < maxIndex; j++) {
        if (heightClone[j] < heightClone[j - 1]) {
            heightClone[j] = heightClone[j - 1];
        }
        heightAnd -= heightClone[j];
    }
    for (let k = 1; k < height.length - maxIndex; k++) {
        if (heightClone[height.length - 1 - k] < heightClone[height.length - k]) {
            heightClone[height.length - 1 - k] = heightClone[height.length - k];
        }
        heightAnd -= heightClone[height.length - 1 - k];
    }
    if (maxIndex !== 0)
        heightAnd -= height[0];
    heightAnd -= height[height.length - 1];
    return heightAnd * (-1);
};
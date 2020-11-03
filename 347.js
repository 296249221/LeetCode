/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let dic = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!dic[nums[i]]) {
            dic[nums[i]] = 1;
        } else {
            dic[nums[i]]++;
        }
    }
    if (Object.keys(dic).length === k) {
        return Object.keys(dic);
    }
    while(result.length < k) {
        let flag;
        for (let item in dic) {
            if (!flag) {
                flag = item;
            } else if (dic[item] > dic[flag]) {
                flag = item;
            }
        }
        result.push(flag);
        delete dic[flag];
    }
    return result;
};
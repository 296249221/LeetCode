/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let index = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            i !== j && validPalindrome(words[i] + words[j]) && index.push([i, j]);
        }
    }
    return index;
};

var validPalindrome = function(word) {
    for (let k = 0; k < Math.floor(word.length / 2); k++) {
        if (word[k] !== word[word.length - k - 1]) {
            return false;
        }
    }
    return true;
};
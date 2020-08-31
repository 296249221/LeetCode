/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let countUD = 0;
    let countLR = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'U') countUD++;
        else if (moves[i] === 'D') countUD--;
        else if (moves[i] === 'L') countLR--;
        else if (moves[i] === 'R') countLR++;
    }
    return countLR === 0 && countUD === 0;
};
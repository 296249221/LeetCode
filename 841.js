/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let roomSet = new Set();
    return visit(rooms, roomSet, 0).size === rooms.length;
};

/**
 * @param {number[][]} rooms
 * @param {Set} roomSet
 * @param {number} newCode
 * @return {Set}
 */
var visit = function(rooms, roomSet, newCode) {
    roomSet.add(newCode);
    for (let i = 0; i < rooms[newCode].length; i++) {
        if (!roomSet.has(rooms[newCode][i])) {
            visit(rooms, roomSet, rooms[newCode][i]);
        }
    }
    return roomSet;
};
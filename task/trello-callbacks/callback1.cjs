const fs = require("fs");
const path = require('path');
const filepath = path.resolve('./boards.json');

const readJSONFile = (fileName) => {
    const jsonString = fs.readFileSync(fileName, { encoding: 'UTF-8', flag: 'r' }, (error, data) => {
        if(error)
            throw error;
    });
    return JSON.parse(jsonString);
}

const callback1 = (boardID = "", cb) => {
    setTimeout(() => {
        if (boardID  && typeof boardID === 'string') {
            let boards;
            try {
                boards = readJSONFile(filepath);
                foundBoard = boards.find(board => board.id == boardID);
                if (foundBoard) {
                    cb(null, foundBoard);
                } else {
                    cb(new Error('No Board found for the given boardId'), foundBoard);
                }
            } catch (error) {
                cb(error, null);
            }
        } else {
            cb(new Error('BoardID is not a string'), null);
        }
    }, 2 * 1000);
}

module.exports = callback1;
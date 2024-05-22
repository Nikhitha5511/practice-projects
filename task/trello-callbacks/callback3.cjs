const fs = require("fs");
const path = require('path');
const filepath = path.resolve('./cards.json');

const readJSONFile = (fileName) => {
    const jsonString = fs.readFileSync(fileName, { encoding: 'UTF-8', flag: 'r' }, (error, data) => {
        if(error)
            throw error;
    });
    return JSON.parse(jsonString);
}

const callback3 = (listID = "", cb) => {
    setTimeout(() => {
        if (listID  && typeof listID === 'string') {
            let cards = [];
            try {
                cards = readJSONFile(filepath);
                foundCards = cards[listID];
                if (foundCards) {
                    cb(null, foundCards);
                } else {
                    cb(new Error('No List found for the given listID'), foundCards);
                }
            } catch (error) {
                cb(error, null);
            }
        } else {
            cb(new Error('listID is not a string'), null);
        }
    }, 2 * 1000);
}

module.exports = callback3;



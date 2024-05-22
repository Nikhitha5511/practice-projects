const fs = require('fs');
const path = require('path');
const filepath = path.resolve('./lists.json');

const readJSONFile = (fileName) => {
    const jsonString = fs.readFileSync(fileName, { encoding: 'UTF-8', flag: 'r' }, (error, data) => {
        if(error){
            console.error(Error); 
        } else{
            console.log('success');
        }

    });
    return JSON.parse(jsonString); 
}

function callback2(boardID = "", cb) {
    setTimeout(() => {
        if (boardID  && typeof boardID === 'string') {
            let lists = [];
            try {
                lists = readJSONFile(filepath);
                foundList = lists[boardID];
                if (foundList) {
                    cb(null, foundList);
                } else {
                    cb(new Error('No List found for the given boardId'), foundList);
                }
            } catch (error) {
                cb(error, null);
            }
        } else {
            cb(new Error('BoardID is not a string'), null);
        }
    }, 2 * 1000);
}

module.exports = callback2; 
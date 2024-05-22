const fs = require("fs");
const path = require('path');
const filepath = path.resolve('./lists.json');

const callback1 = require("./callback1.cjs");
const callback2 = require("./callback2.cjs");
const callback3 = require("./callback3.cjs");

const readJSONFile = (fileName) => {
    const jsonString = fs.readFileSync(fileName, { encoding: 'UTF-8', flag: 'r' }, (error, data) => {
        if(error)
            throw error;
    });
    return JSON.parse(jsonString);
}

const callback6 = () => {
    setTimeout(() => {
        // Get information from the Thanos boards
        callback1("mcu453ed", (error, data) => {
            if (error) {
                console.error(error.message);
            } else { console.log(data);
            }
        });

        // Get all the lists for the Thanos board
        callback2("mcu453ed", (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log(data);
            }
        });

        //Get all cards for all lists simultaneously
        const lists = readJSONFile(filepath);
        Object.entries(lists).forEach(([, value]) => {
            value.forEach(obj => {
                callback3(obj.id, (error, data) => {
                    if (error) {
                        console.error(error.message);
                    } else {
                        console.log(data);
                    }
                });
            })
        })

    }, 2 * 1000);
}

module.exports = callback6;


const fs = require("fs");


const callback1 = require("./callback1.cjs");
const callback2 = require("./callback2.cjs");
const callback3 = require("./callback3.cjs");

const callback4 = () => {
    setTimeout(() => {
        // Get information from the Thanos boards
        callback1("mcu453ed", (error, data) => {
            if (error) {
                console.error(error.message);
            } else {
                console.log(data);
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

        // Get all cards for the Mind lists simultaneously
        callback3("qwsa221", (error, data) => {
            if (error) {
                console.error(error.message);
            } else {
                console.log(data);
            }
        });

    }, 2 * 1000);
}
module.exports = callback4;

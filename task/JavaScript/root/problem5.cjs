const problem4 = require("./problem4.cjs");

const problem5 = function(inventory) {

    const result = problem4(inventory);
    let years = [];
    for (let i=0; i<result.length; i++) {
        if (result[i] < 2000)
            years.push(result[i]);
    }
    return "Car Model years : " + years + " Size - " + years.length;
}

module.exports = problem5;
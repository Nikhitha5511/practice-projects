
const problem1 = function(inventory = [], id = 0) {
    if (id.constructor != Number || inventory.constructor != Array)
        return [];
    for (let i = 0; i < inventory.length; i++) {
        let carObj = inventory[i];
        if (carObj['id'] == id) {
            return carObj;
        }
    }
    return [];
}

module.exports = problem1;
const problem2 = function(inventory) {

    let len = inventory.length;
    let carObj = inventory[len-1];
    return "Last car is a " + carObj['car_make'] + " " + carObj['car_model'];
}

module.exports = problem2;
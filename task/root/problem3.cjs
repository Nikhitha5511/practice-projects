const problem3 = function(inventory) {

    let carModelNames = [];
    for (let i=0; i<inventory.length; i++) {
        carModelNames[i] = inventory[i]['car_model'];
    }
    return carModelNames.sort();
}

module.exports = problem3;
const problem6 = function(inventory) {

    let BMWAndAudiArray = [];
    for (let i=0; i<inventory.length; i++) {
        if (inventory[i]['car_make'] == "BMW" || inventory[i]['car_make'] == "Audi")
            BMWAndAudiArray.push(inventory[i]);
    }
    return JSON.stringify(BMWAndAudiArray);
}

module.exports = problem6;
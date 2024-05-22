const problem1 = function(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
        let carObj = inventory[i];
        if (carObj['id'] == id) {
            return "Car " + id +" is a " + carObj['car_year'] + " " + carObj['car_make'] + " " + carObj['car_model'];
        }
    }
}

module.exports = problem1;




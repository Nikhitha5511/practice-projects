
const inventory = require("../cars.cjs");

const problem1 = require("../root/problem1.cjs");
const result1 = problem1(inventory, 33);
console.log(result1);
const result2 = problem1(new String("hello"));
console.log(result2);
const result3 = problem1();
console.log(result3);
const result4 = problem1([]);
console.log(result4);
const result5 = problem1({id: 33, name: "Test", length: 10}, 33);
console.log(result5);
const result6 = problem1(inventory, []);
console.log(result6);

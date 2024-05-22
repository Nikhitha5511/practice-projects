const fs = require('fs');

const bufferData = fs.readFileSync(process.argv[2]);
const data = bufferData.toString();
const lines = data.split('\n').length-1;
console.log(lines);

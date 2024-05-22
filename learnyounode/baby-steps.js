const args = process.argv.slice(2);

const sum = args.reduce((total,number)=>total+parseInt(number),0);
console.log(sum);
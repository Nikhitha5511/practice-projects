const mymodule = require('./mymodule.js');

const directoryPath=process.argv[2];
const extension = process.argv[3];

mymodule(directoryPath,extension,(error,data)=>{
    if(error){
        console.error(error);
    }
    else{
        data.forEach(file=>console.log(file));
    }
})
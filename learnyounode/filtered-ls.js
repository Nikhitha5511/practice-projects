const fs = require('fs');
const path=require('path');

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

fs.readdir(directoryPath,'utf-8',(error,data)=>{
    if(error){
        console.error(error);
    }
    else{
        const filteredData = data.filter(file=>path.extname(file)===`.${fileExtension}`);
        filteredData.forEach(file=>console.log(file));
    }
});

const fs = require('fs');
const path =require('path');

module.exports = function(directoryPath,extension,callback){
    fs.readdir(directoryPath,(error,data)=>{
        if(error){
            callback(error);
        }
        else{
            const filteredData = data.filter(file=>path.extname(file)===`.${extension}`);
            callback(null,filteredData);
        }
    })
}
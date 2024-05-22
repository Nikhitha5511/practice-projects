
// Using the promise chain, write a uuid v4 to a file.
// Then read the contents from that file.
// Then convert it to uppercase
// Then write it to that file.
// Create a function that reads a file and returns its content using promises.
// Create a function that writes to a file based on the content given using promises.


// const fs = require('fs').promises;
// const {v4:uuid} = require('uuid');

// async function fileInfo(){
//     try{
//         await fs.writeFile('example2.txt',uuid())
//         console.log('data written succesfully');
//         const data=await fs.readFile('example2.txt','utf-8')
//         console.log(data);
//         const upperCaseContent = data.toUpperCase()
//         await fs.appendFile('example2.txt',`\n${upperCaseContent}`)
//         console.log('data written to file after converting to uppercase')
        
//     }
//     catch(error){
//         console.error(error);
//     }
   

// }

// fileInfo();


const fs = require('fs');
const {v4:uuid} = require('uuid');

function readFile(filepath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,'utf-8',(error,data)=>{
            if(error){
                reject(error);
            }
            else{
                resolve(data);
            }
        })
    })
}

function writeFile(filePath,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,data,(error)=>{
            if(error){
                reject(error);
            }
            else{
                resolve();
            }
        })
    })
}

function performOperations(){
    writeFile('example3.txt',uuid())
    .then(()=>{
     console.log('data written succeesully');
     return readFile('example3.txt','utf-8')
    })
   
    .then((data)=>{
        const upperCaseContent = data.toUpperCase();
        writeFile('example3.txt',`\n${upperCaseContent}`)
    })
    .then(()=>{
        console.log("data written to file successfully after converting to uppercase")
    })
    .catch((error)=>{
        console.error(error);
    })
}

performOperations();
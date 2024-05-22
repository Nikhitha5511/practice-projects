// Create a promise to read a file
// Create a promise to write to a file
// Create a promise to change the permissions of a file
// Create a promise to check the permissions of a file


// Using the promise chain, write a uuid v4 to a file.
// Then read the contents from that file.
// Then convert it to uppercase
// Then write it to that file.
// Create a function that reads a file and returns its content using promises.
// Create a function that writes to a file based on the content given using promises.

// Using a flat promise chain, do the following:
// Read a file data.txt
// Convert the content to uppercase & write to a new file
// Take the data from the previous chain and convert it to lowercase.
// Taking the data from the previous chain, sort the content.
// Write the sorted content to a new file. Then read the file and pass the content to the next chain.

// At the very end of the chain, delete all the new files that were created.
// Fetch countries data using fetch method and find countries per region and store it in a file. ( Use promises to solve this )

// Implement the functionality of Promise.All
// Implement the functionality of Promise.race





//1.

// const fs = require('fs');
// function readFile(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('lipsum1.txt',(error,data)=>{
//             if(error){
//                reject(error);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// readFile()
// .then((data)=>{
//     console.log(data.toString());
// })
// .catch((error)=>{
//     console.error(error);
// })


//const fs = require('fs').promises;

// function readFileAsync(){
//     return fs.readFile('lipsum1.txt','utf-8')
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.error(error);
//     })
// }

// readFileAsync();


// async function readFile(){
//     try{
//         const data = await fs.readFile('lipsum1.txt','utf-8')
//         console.log(data);
//     }catch(error){
//         console.error(error);
//     }
   
// }

// readFile();


//2.

// const fs = require('fs');

// function writeFile(){

//     return new Promise((resolve,reject)=>{
//       fs.writeFile('example.txt','hello promises',(error)=>{
//         if(error){
//             reject(error);
//         }
//         else{
//             resolve();
//         }
//       })
//     })
// }


// writeFile();


// const fs=require('fs').promises;

// function writeFile(){
//     return fs.writeFile('example.txt','hello promises')
//     .then(()=>{
//         console.log("data written successfully");
//     })
//     .catch((error)=>{
//         console.error('something went wrong',error);
//     })
// }

// writeFile();


// const fs = require('fs').promises;

// async function writeFile(){
//     try{
//         await fs.writeFile('example.txt','hello promises')
//         console.log('data written sucessfully');
//     }
//     catch(error){
//         console.error('something went wrong',error);
//     }
// }

// writeFile();


//3.

// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname,'example.txt');
// const mode = 0o755;

// function chnagePermissison(filePath,mode){
//     return new Promise((resolve,reject)=>{
//      fs.chmod(filePath,mode,(error)=>{
//         if(error){
//             reject(error);
//         }
//         else{
//             resolve();
//         }
//      })
//     })
// }

// chnagePermissison(filePath,mode)
// .then(()=>{
//     console.log("file permission changed successfully");
// })
// .catch((error)=>{
//     console.error('something went wrong','error');
// })


// const fs = require('fs').promises;
// const path = require('path');

// const filePath = path.join(__dirname,'example.txt');
// const mode = 0o644;

// function changePermission(filePath,mode){
//     return fs.chmod(filePath,mode)
//     .then(()=>{
//         console.log('file permission changed successfully');
//     })
//     .catch((error)=>{
//         console.error('something went wrong',error)
//     })
// }

// changePermission(filePath,mode);


// const fs = require('fs').promises;
// const path = require('path');

// const filePath = path.join(__dirname,'example.txt');
// const mode = 0o444;

// async function chnagePermissison(filePath,mode){
//    try{
//     await fs.chmod(filePath,mode)
//     console.log('file permission chnaged successfully');
//    }
//    catch(error){
//     console.error('something went wrong',error);
//    }
// }

// chnagePermissison(filePath,mode);

// //.4

// const fs = require('fs');
// const path = require('path');
// const filePath = path.join(__dirname,'example.txt');
// const mode = fs.constants.R_OK;

// function checkPermission(filePath,mode){
//     return new Promise((resolve,reject)=>{
//         fs.access(filePath,mode,(error)=>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                 resolve();
//             }
//         })
//     })
// }

// checkPermission(filePath,mode)
// .then(()=>{
//     console.log('file has read permission')
// })
// .catch((error)=>{
//     console.error('It dont have read permission',error)
// })


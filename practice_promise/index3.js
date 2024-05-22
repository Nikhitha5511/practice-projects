// Using a flat promise chain, do the following:
// Read a file data.txt
// Convert the content to uppercase & write to a new file
// Take the data from the previous chain and convert it to lowercase.
// Taking the data from the previous chain, sort the content.
// Write the sorted content to a new file. Then read the file and pass the content to the next chain.

// At the very end of the chain, delete all the new files that were created.


// const fs = require('fs').promises;

// function fileOperations(){
//     return fs.readFile('lipsum1.txt','utf-8')
//     .then((data)=>{
//         console.log('data read sucessfully');
//         const upperCaseContent = data.toUpperCase();
//         return fs.writeFile('sample.txt',upperCaseContent)
//     })
//     .then((data)=>{
//         console.log('data written to file successfully');
//         return fs.readFile('sample.txt','utf-8')
//     })
//     .then((data)=>{
//         const lowerCaseData = data.toLowerCase();
//         return lowerCaseData;
//     })
//     .then((lowerCaseData)=>{
//         const sortData = lowerCaseData.split('.').sort();
//         return fs.writeFile('sample2.txt',sortData.join('.'))
//     })
//     .then(()=>{
//         console.log('data sorted succesfully');
//         return fs.readFile('sample2.txt','utf-8')
//     })
//     .then((sortedContent)=>{
//         console.log(sortedContent);
//         return Promise.all([
//             fs.unlink('sample.txt'),
//             fs.unlink('sample2.txt')

//         ])
//     })
//     .then(()=>{
//         console.log('all files deleted')
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// }

// fileOperations();



// const fs = require('fs').promises;

// async function fileOperations(){
//     try{
//         const data =await fs.readFile('lipsum1.txt','utf-8')
//         console.log('data read sucessfully');
//         const upperCaseContent = data.toUpperCase();
//         await fs.writeFile('sample.txt',upperCaseContent)
        
//         console.log('data written to file successfully');
//         const newData= await fs.readFile('sample.txt','utf-8')
    
//         const lowerCaseData = newData.toLowerCase();
//         const sortData = lowerCaseData.split('.').sort();
//         await fs.writeFile('sample2.txt',sortData.join('.'))
    
//         console.log('data sorted succesfully');
//         const sortedContent=await fs.readFile('sample2.txt','utf-8')
//         console.log(sortedContent);
//         await Promise.all([
//                 fs.unlink('sample.txt'),
//                 fs.unlink('sample2.txt')
    
//             ])
    
//         console.log('all files deleted')
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// fileOperations();


const fs = require('fs');

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

function writeFile(filepath,data){
    return new Promise((resolve,reject)=>{
      fs.writeFile(filepath,data,(error)=>{
        if(error){
            reject(error);
        }
        else{
            resolve(data);
        }
      })
    })
}

function deleteFile(filePath){
    return new Promise((resolve,reject)=>{
        fs.unlink(filePath,(error)=>{
          if(error){
            reject(error);
          }
          else{
            resolve();
          }
        })
    })
}
function fileInfo(){
    return readFile('lipsum1.txt','utf-8')
    .then((data)=>{
        console.log('data read successfully');
        const upperCase = data.toUpperCase();
        return writeFile('upperCaseFile.txt',upperCase)
    })
    .then(()=>{
        console.log('data written sucessfully');
        return readFile('upperCaseFile.txt','utf-8')
    })
    .then((data)=>{
        const lowerCase = data.toLowerCase();
        return lowerCase;
    })
    .then((lowerCase)=>{
        const sortData = lowerCase.split(' ').sort();
        return writeFile('sortFile.txt',sortData.join(' '));
    })
    .then(()=>{
        console.log('data sorted');
        return readFile('sortFile.txt','utf-8')
    })
    .then((sortedContent)=>{
        console.log(sortedContent);
        return Promise.all([
            deleteFile('upperCaseFile.txt'),
            deleteFile('sortFile.txt')
        ])

    })
    // .then(()=>{
    //     console.log('uppercase file deleted successfully');
    //     return deleteFile('sortFile.txt')
    // })
    .then(()=>{
        console.log('all files deleted')
    })
    .catch((error)=>{
        console.error(error);
    })
}

fileInfo();
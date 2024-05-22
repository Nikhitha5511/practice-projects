const fs = require('fs');
const path = require('path');


function createRandomFiles(dir, fileName, iterator) {
    let allFileNames = 0 ;
    while (iterator > 0) {
        let randomNumber = Math.round(Math.random() * 10);
        
        const file = `${fileName}_${randomNumber}.json`;
        const filePath = path.resolve(__dirname, file);

        if (fs.exist(filePath)) 
            continue;
        }

        fs.writeFile(filePath, "Hello Nodejs", (error) => {
            if(error) {
                throw error;
            } else {
                console.log(`File ${filePath} is created successfully`);
            }
        });

        allFileNames.push(filePath);
        iterator--;
    }
    return allFileNames;


function deleteRandomFiles(allFileNames) {
    for (let oneFileName of allFileNames) {
        fs.unlink(oneFileName, (error) => {
            if(error){
                throw error;
            }
            else{
                console.log("File is deleted successfully");
            }
        });
    }
}

function createDirectory(dir) {
    if (!fs.exist(dir))
    {
        fs.mkdir(dir, (error) => {
            if (error) {
                console.error(`Error creating directory -> ${dirName}`, error);
                throw error;
            }
        });
    }



const createAndDeleteDirectoryRandomFiles = async (dirName, fileName, numberOfFiles) => {
    const dir = path.join(__dirname, dirName);
    createDirectory(dir);
    //create and delete all random files 
    deleteRandomFiles(createRandomFiles(dir, fileName, numberOfFiles));
}





module.exports = createAndDeleteDirectoryRandomFiles;

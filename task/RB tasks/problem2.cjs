const fs = require('fs');
const path = require('path')

const readFile = (fileName) => {
    return fs.readFile(fileName, { encoding: 'UTF-8', flag: 'r' }, (error) => {
        if (error)
            throw error;
    });
}

const writeFile = (fileName, content) => {
    fs.writeFile(fileName, content, 'utf-8', (error) => {
        if (error)
            throw error;
    });
}

const deleteFiles = (allFileNames) => {
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

const problem2 = () => {
    let newFileNames = [];

    let data = readFile('lipsum.txt');
    let upperCaseData = data.toUpperCase();

    let fileName = 'upperCaseFile.txt';
    writeFile(fileName, upperCaseData);
    newFileNames.push(fileName);

    let splitData = readFile(fileName).toLowerCase().split(". ");
    fileName = 'splitFile.txt';
    writeFile(fileName, splitData.toString());
    newFileNames.push(fileName);

    let allData = [];
    allData.push(...readFile(newFileNames[0]).split(" "));
    allData.push(...readFile(newFileNames[1]).split(" "));

    let sortedData = allData.sort().join(" ");
    fileName = 'sortedFile.txt';
    writeFile(fileName, sortedData.toString());
    newFileNames.push(fileName);

    deleteFiles(newFileNames);
}

module.exports = problem2;

problem2();


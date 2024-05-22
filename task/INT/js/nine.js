// /*
//  * Use asynchronous callbacks ONLY wherever possible.
//  * Error first callbacks must be used always.
//  * Each question's output has to be stored in a json file.
//  * Each output file has to be separate.

//  * Ensure that error handling is well tested.
//  * After one question is solved, only then must the next one be executed. 
//  * If there is an error at any point, the subsequent solutions must not get executed.
   
//  * Store the given data into data.json
//  * Read the data from data.json
//  * Perfom the following operations.

//     1. Retrieve data for ids : [2, 13, 23].
//     2. Group data based on companies.
//         { "Scooby Doo": [], "Powerpuff Brigade": [], "X-Men": []}
//     3. Get all data for company Powerpuff Brigade
//     4. Remove entry with id 2.
//     5. Sort data based on company name. If the company name is same, use id as the secondary sort metric.
//     6. Swap position of companies with id 93 and id 92.
//     7. For every employee whose id is even, add the birthday to their information. The birthday can be the current date found using `Date`.

//     NOTE: Do not change the name of this file

// */




// const fs = require('fs');
// const rawData = fs.readFileSync('./data.json');
// const jsonData = JSON.parse(rawData);
// const data = jsonData.employees;

// const retrieveDataByIds = (ids, callback) => {
//     const result = data.filter(entry => ids.includes(entry.id));
//     callback(null, result);
// };

// const groupDataByCompanies = (callback) => {
//     const groupedData = {};
//     data.forEach(entry => {
//         if (!groupedData[entry.company]) {
//             groupedData[entry.company] = [];
//         }
//         groupedData[entry.company].push(entry);
//     });
//     callback(null, groupedData);
// };

// const getDataForCompany = (companyName, callback) => {
//     const companyData = data.filter(entry => entry.company === companyName);
//     callback(null, companyData);
// };



// const removeEntryById = (id, callback) => {
//     const index = data.findIndex(entry => entry.id === id);
//     if (index !== -1) {
//         data.splice(index, 1);
//         callback(null);
//     } else {
//         callback(new Error('Entry not found'));
//     }
// };


// const sortData = (callback) => {
//     data.sort((a, b) => {
//         if (a.company === b.company) {
//             return a.id - b.id;
//         }
//         return a.company.localeCompare(b.company);
//     });
//     callback(null);
// };

// const swapPositions = (id1, id2, callback) => {
//     const entry1 = data.find(entry => entry.id === id1);
//     const entry2 = data.find(entry => entry.id === id2);
//     if (entry1 && entry2) {
//         [entry1.company, entry2.company] = [entry2.company, entry1.company];
//         callback(null);
//     } else {
//         callback(new Error('One or more entries not found'));
//     }
// };


// const addBirthdayForEvenIds = (callback) => {
//     const currentDate = new Date().toISOString().slice(0, 10);
//     data.forEach(entry => {
//         if (entry.id % 2 === 0) {
//             entry.birthday = currentDate;
//         }
//     });
//     callback(null,data);
// };


// // Execute tasks sequentially
// retrieveDataByIds([2, 13, 23], (err, task1Result) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     fs.writeFile('task1.json', JSON.stringify(task1Result), (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         groupDataByCompanies((err, groupedData) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             fs.writeFile('task2.json', JSON.stringify(groupedData), (err) => {
//                 if (err) {
//                     console.error(err);
//                     return;
//                 }
//                 getDataForCompany('Powerpuff Brigade', (err, powerpuffData) => {
//                     if (err) {
//                         console.error(err);
//                         return;
//                     }
//                     fs.writeFile('task3.json', JSON.stringify(powerpuffData), (err) => {
//                         if (err) {
//                             console.error(err);
//                             return;
//                         }
//                         removeEntryById(2, (err) => {
//                             if (err) {
//                                 console.error(err);
//                                 return;
//                             }
//                             sortData((err) => {
//                                 if (err) {
//                                     console.error(err);
//                                     return;
//                                 }
//                                 swapPositions(93, 92, (err) => {
//                                     if (err) {
//                                         console.error(err);
//                                         return;
//                                     }
//                                     addBirthdayForEvenIds((err,dataWithBirthday) => {
//                                         if (err) {
//                                             console.error(err);
//                                             return;
//                                         }
//                                         fs.writeFile('task4.json', JSON.stringify(dataWithBirthday), (err) => {
//                                             if (err) {
//                                                 console.error(err);
//                                                 return;
//                                             }
//                                             console.log('All tasks completed successfully.');
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });





const fs=require('fs').promises;

// const rawData = fs.readFile('./data.json')
// const res = JSON.parse(rawData);
// const data = res.employees;

const res = require('./data.json');
const data= res.employees;



// const retrieveDataByIds=(ids,callback)=>{
//  const result = data.filter(entry=>ids.includes(entry.id));
//  callback(null,result);

// }

// const groupDataByCompanies=(callback)=>{

//     const groupedData={};
//     data.forEach(entry => {
//         if(!groupedData[entry.company]){
//             groupedData[entry.company]=[];
//         }
//         groupedData[entry.company].push(entry);
        
        
//     });
//     callback(null,groupedData);

// }

// const getDataForCompany=(companyName,callback)=>{

//     const result = data.filter(entry=>entry.company===companyName)
//     callback(null,result);
// }

// const removeEntryById=(id,callback)=>{

//     const index =data.findIndex(entry=>entry.id===id)
//     if(index!=-1){
//         data.splice(index,1);
//         callback(null,data);
//     }
//     else{
//         callback(new Error("id not found"));
//     }

// }


// const sortData=(callback)=>{
//   data.sort((a,b)=>{
//     if(a.company==b.company){
//        return a.id-b.id;
//     }
//      return a.company.localeCompare(b.company);
//   });
//   callback(null,data);
// }


// const swapPositions=(id1,id2,callback)=>{

//     const entry1=data.find(entry=>entry.id===id1)
//     const entry2=data.find(entry=>entry.id===id2)
//     if(entry1 && entry2){
//     [entry1.company,entry2.company]=[entry2.company,entry1.company];
//     callback(null);
//     }
//     else{
//         callback(new Error('id not found'));
//     }

// }


// const getBirthday=(callback)=>{

//     const currentDate=new Date().toISOString().slice(0,10);
//     data.forEach(entry=>{
//         if(entry.id%2===0){
//             entry.birthday=currentDate;

//         }
//     });
//     callback(null,data);
// }


// // retrieveDataByIds([2,13,23],(err,task1Result)=>{
// //     if(err){
// //         console.error(err);
// //         return;
// //     }
// //     fs.writeFile('task1.json',JSON.stringify(task1Result),(err)=>{

// //     if(err){
// //         console.error(err);
// //         return;
// //     }
    
// //     groupDataByCompanies((err,groupedData)=>{
// //         if(err){
// //             console.error(err);
// //             return;
// //         }
// //         fs.writeFile('task2.json',JSON.stringify(groupedData),(err)=>{
// //             if(err){
// //                 console.error(err);
// //                 return;
// //             }
// //         getDataForCompany('Powerpuff Brigade',(err,resultData)=>{
// //             if(err){
// //                 console.error(err);
// //                 return;
// //             }
// //             fs.writeFile('task3.json',JSON.stringify(resultData),(err)=>{
// //                 if(err){
// //                     console.error(err);
// //                     return;
// //                 }
// //                 removeEntryById(2,(err,data)=>{
// //                     if(err){
// //                         console.error(err);
// //                         return;
// //                     }
// //                     fs.writeFile('task4.json',JSON.stringify(data),(err)=>{
// //                         if(err){
// //                             console.error(err);
// //                             return;
// //                         }
// //                     sortData((err,data)=>{
// //                     if(err){
// //                         console.error(err);
// //                         return;
// //                     }
// //                     fs.writeFile('task5.json',JSON.stringify(data),(err)=>{
// //                         if(err){
// //                           console.error(err);
// //                           return;
// //                         }
// //                         swapPositions(93, 92,(err)=>{
// //                             if(err){
// //                                 console.error(err);
// //                                 return;
// //                             }
// //                         })
// //                     getBirthday((err,data)=>{
// //                         if(err){
// //                             console.error(err);
// //                             return;
// //                         }
// //                         fs.writeFile('task6.json',JSON.stringify(data),(err)=>{
// //                             if(err){
// //                                 console.error(err);
// //                                 return;
// //                             }
// //                             console.log("all tasks completed succesfully");
// //                         })
// //                     })
// //                     })
// //                     })
                    
// //                     })

// //                 })
// //             })
// //         })


// //         })
    
// //     })

// //     })
// // })


const retrieve=(ids)=>{
    return new Promise((resolve,reject)=>{
    const res = data.filter(item=>ids.includes(item.id));
    resolve(res);
    })
  
}


const getCompany=(companyName)=>{
    return new Promise((resolve,reject)=>{
        const res = data.filter(item=>item.company===companyName)
        resolve(res);
    }) 
}

// retrieve([2,13,23],(err,task1)=>{
//   if(err){
//     console.error(err);
//   }
//   fs.writeFile('output1.json',JSON.stringify(task1),(err)=>{
//     if(err){
//         console.error(err);
//     }
//     getCompany('Powerpuff Brigade',(err,task2)=>{
//         if(err){
//             console.error(err);
//         }
//         fs.writeFile('output2.json',JSON.stringify(task2),(err)=>{
//             if(err){
//                 console.error(err);
//             }
//         })
//     })
//   })

// })

async function main(){
    try{
     const task1 = await retrieve([2,13,23])
     await fs.writeFile('example1.json',JSON.stringify(task1));

     const task2 = await getCompany('Powerpuff Brigade')
     await fs.writeFile('example2.json',JSON.stringify(task2));

    }
    catch(error){
        console.error(error);
    }
}
main();
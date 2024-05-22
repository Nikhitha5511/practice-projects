// const http = require('http');
 
// http.get(`http://api.sampleapis.com/coffee/hot`,(response)=>{
//     let responseData='';

//     response.on('data',(data)=>{
//         responseData +=data;
//     })

//     response.on('end',()=>{
//      let result = JSON.parse(responseData);
//      console.log(result);
//     })
// })



const http = require('http');

const url = process.argv[2];

http.get(url,(response)=>{
    response.setEncoding('utf-8');
    response.on('data',(data)=>{
        console.log(data);
    })
    response.on('error',(error)=>{
        console.error(error.message);
    })
})
.on('error',(error)=>{
    console.error(error.message);
})

const http = require('http');

const urls = process.argv.slice(2);
let responses=[];
let completedRequests=0;

function getData(url,index){
    http.get(url,(response)=>{
        let responseData='';
        response.on('data',(data)=>{
            responseData +=data;
        })
        response.on('end',()=>{
            responses[index] =responseData;
            completedRequests++;
            if(completedRequests===urls.length){
            responses.forEach(data=>{
                console.log(data);
            })
        }
        })
        response.on('error',(error)=>{
            console.error(error);
        })
    })
    .on('error',(error)=>{
        console.error(error);
    })
}

urls.forEach((url,index)=>{
    getData(url,index);
})


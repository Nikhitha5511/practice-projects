const http=require('http');

const url =process.argv[2];
http.get(url,(response)=>{
    let data='';
    let sum =0;

    response.on('data',(chunk)=>{
        data +=chunk;
        sum +=chunk.length;
    })
    response.on('end',()=>{
        console.log(sum);
        console.log(data);
    })
    response.on('error',(error)=>{
        console.error(error);
    })
    
})
.on('error',(error)=>{
    console.error(error);
})


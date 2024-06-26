const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((request,response)=>{
    if(request.method==='POST'){
        request.pipe(map(chunk=>chunk.toString().toUpperCase())).pipe(response); 
    }
    else{
        response.end('send a post request');
    }
})
.on('error',(error)=>{
    console.error(error.message);
})

server.listen(port);
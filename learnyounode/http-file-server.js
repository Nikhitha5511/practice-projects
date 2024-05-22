const http = require('http');

const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/plain'})
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(response);

    response.on('error',(error)=>{
        console.error(error);
    })
})

server.listen(port);
const net =require('net');

const port = process.argv[2];

const server = net.createServer(socket=>{
    const date =new Date();
    const year = date.getFullYear();
    const month = padZero(date.getMonth()+1);
    const day =padZero(date.getDate());
    const hours =padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;
    socket.write(formattedDate);
    socket.end();

})

server.listen(port);

function padZero(number){
    return (number<10 ? '0':'')+number;
}
const qio = require("q-io/http");

qio.read("http://localhost:7000/")
.then((id)=>{
    return qio.read("http://localhost:7001/" + id)
})
.then((json)=>{
    console.log(JSON.parse(json));
})
.catch(error=>{
    console.error(error);
})
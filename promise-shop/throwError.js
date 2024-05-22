
const jsonData = process.argv[2];

function parsePromised(jsonData){
    return new Promise((fulfill,reject)=>{
        try{
            const validData = JSON.parse(jsonData);
            fulfill(validData);
        }
        catch(error){
            reject(new Error('Unexpected token u in JSON at position 0'));
        }
    })
}

function onReject(error){
    console.log(error.message)
}
parsePromised(jsonData)
.then(null,onReject);



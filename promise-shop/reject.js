var promise =new Promise((fulfiil,reject)=>{
    setTimeout(()=>{
        reject(new Error('REJECTED!'));
    },300);
})

function onReject(error){
    console.log(error.message);
}

promise.then(null,onReject);

function all(promise1,promise2){
    return new Promise((fulfill,reject)=>{
        let counter=0;
        const values=[];

        function fullfillmentHandler(value,index){
           values[index] =value;
           counter++;

           if(counter===2){
            fulfill(values);
           }
        }

        function handleRejection(error){
         reject(error);
        }

        promise1.then((value)=>fullfillmentHandler(value,0)).catch(handleRejection)
        promise2.then((value)=>fullfillmentHandler(value,1)).catch(handleRejection);
    })
}
all(getPromise1(),getPromise2())
.then((value)=>console.log(value))
.catch((error)=>console.error(error));
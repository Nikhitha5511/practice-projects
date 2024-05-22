
const firstProgram =first();

const result = firstProgram.then((value)=>{
    return second(value);
})

result.then(console.log);
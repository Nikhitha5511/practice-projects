const accessKey='PSamZAYc_GPjgMKg9L2BpIWS0Mp7tz2jSPNZsy-iE3c';
let query='';
let page=1;
const perPage=10;

// function fetchResults(){
//     fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.error("error",error);
//     })
// }
// fetchResults();

// async function fetchResults(){
//     try{
//     let response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`);
//     let data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//      console.error(error);
//     }

// }
// fetchResults();

const fetchResults= () =>{
    fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.error("error",error);
    })
}
fetchResults();
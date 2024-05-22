// const fetchData=()=>{
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(response=>response.json())
//     .then(data=>{
        
//         let countryCount={};
//         data.forEach(country=>{
//             const region=country.region;
//             const subregion=country. subregion;

//             if(!countryCount[region]){
//                 countryCount[region]={};
//             }
//             if(!countryCount[region][subregion]){
//                 countryCount[region][subregion]=0;
//             }

//             countryCount[region][subregion]++;
//         });
//         console.log('coutryCount', countryCount);


//         const sortedCountries={};

//         Object.keys(countryCount).forEach(region=>{
//             sortedCountries[region]=Object.fromEntries(
//                 Object.entries(countryCount[region]).sort(([,countA],[,countB])=>countB-countA)
//             );
//         });


//     console.log('sorted countries', sortedCountries);



//     })
//     .catch(error=>{
//         console.error(error);
//     })
// }

// fetchData();



const fetchData=()=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response=>response.json())
    .then(data=>{
        let count={};
        data.forEach(country=>{
            const region = country.region;
            const subregion = country.subregion;

            if(!count[region]){
                count[region]={};
            }
            if(!count[region][subregion]){
                count[region][subregion]=0;
            }
            count[region][subregion]++;
       })
       console.log('count',count);


       let sortedCount={};

       Object.keys(count).forEach(region=>{
           sortedCount[region] = Object.fromEntries(
               Object.entries(count[region]).sort(([,countA],[,countB])=>countB-countA)
           )
       })

       console.log('sortedCount',sortedCount);
    })
    .catch(err=>{
        console.error(err);
    })
}

fetchData();

// Find the number of countries in Europe
// Find the number of countries per region
// Find the number of countries per subregion per region
// Find the country with lowest population per sub region per region

// Fetch countries data using fetch method and find countries per region and store it in a file. ( Use promises to solve this )

// const fs = require('fs').promises;

// async function fetchData(){
//     try{
//         const data = await fetch(`https://restcountries.com/v3.1/all`);
//         const countriesData = await data.json();
    
//         const countriesPerRegion= countriesData.reduce((acc,curr)=>{
//             const region = curr.region;
//             if(acc[region]){
//                 acc[region] +=1;
//             }
//             else{
//                 acc[region] =1;
//             }
//             return acc;
//         },{});
    
//         await fs.writeFile('output.json',JSON.stringify(countriesPerRegion,null,2))
//         console.log("data stored to output file successfully")
//     }
//     catch(error){
//         console.error(error);
//     }
   

// }

// fetchData();


// const fs = require('fs');

// function fetchDataNormally(){
//     return fetch(`https://restcountries.com/v3.1/all`)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((countries)=>{
//         const countriesPerRegion = countries.reduce((acc,curr)=>{
//             const region = curr.region;
//             if(acc[region]){
//                 acc[region] +=1;
//             }
//             else{
//                 acc[region] =1;
//             }
//             return acc;
//         },{});
//         return countriesPerRegion;
//     })
//     .then((data)=>{
//         return writeFile('output2.json',JSON.stringify(data,null,2));
//     })
  
// }

// function writeFile(fileName,data){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(fileName,data,(error)=>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                 resolve('data written to output file succesfully');
//             }
//         })
//     })
// }

// fetchDataNormally()
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.error(error);
// })


//2.


// const fs = require('fs').promises;

// async function fetchData(){
//     try{
//         const data = await fetch(`https://restcountries.com/v3.1/all`)
//         const countriesData = await data.json();
    
//         const countriesPerRegion = countriesData.reduce((acc,curr)=>{
//             const region = curr.region;
//             const subregion= curr.subregion;
//             if(acc[region]){
//                 if(acc[region][subregion]){
//                     acc[region][subregion] +=1;
//                 }
//                 else{
//                     acc[region][subregion]=1;
//                 }
//             }
//             else{
//                 acc[region]={};
//                 acc[region][subregion]=1;
//             }
//             return acc;
//         },{});
      
//         await fs.writeFile('output3.json',JSON.stringify(countriesPerRegion,null,2))
//         console.log('data written to output successfully');
    
//     }

//     catch(error){
//         console.error(error);
//     }
   
// }
// fetchData();

// const { subscribe } = require('diagnostics_channel');
// const fs = require('fs');

// function fetchDataNormally(){

//     return fetch(`https://restcountries.com/v3.1/all`)
//     .then((data)=>{
//         return data.json();
//     })
//     .then((countries)=>{
//         const countriesPerRegion = countries.reduce((acc,curr)=>{
//             const region =curr.region;
//             const subregion=curr.subregion;

//             if(acc[region]){
//                 if(acc[region][subregion]){
//                     acc[region][subregion] +=1;
//                 }
//                 else{
//                     acc[region][subregion] =1;
//                 }
//             }
//             else{
//                 acc[region]={};
//                 acc[region][subregion] =1;
//             }
//             return acc;
//         },{});
//         return countriesPerRegion;
//     })
//     .then((result)=>{
//         return writeFile('output4.json',JSON.stringify(result,null,2))
        
//     })
//     .catch(error=>{
//         console.error(error);
//     })
// }

// function writeFile(fileName,data){
//     return new Promise((resolve,reject)=>{
//         fs.writeFile(fileName,data,(error)=>{
//             if(error){
//                 reject(error);
//             }
//             else{
//                 resolve('data written to output successfully');
//             }
//         })
//     })
// }

// fetchDataNormally()
// .then((message)=>console.log(message))
// .catch((error)=>console.error(error));


// function fetchData(){
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then((data)=>data.json())
//     .then((countries)=>{
//         const result = countries.reduce((acc,curr)=>{
//             if(curr.region === 'Europe'){
//                 return acc+1;
//             }
//             else{
//                 return acc;
//             }
//         },0);
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// }

// fetchData();

// const fs = require('fs').promises;

// async function fetchData(){
//     try{
//         const data =await fetch(`https://restcountries.com/v3.1/all`)
//         const countries = await  data.json();
//             const result= countries.reduce((acc,curr)=>{
//                 if(curr.region === 'Europe'){
//                     return acc+1;
//                 }
//                 else{
//                     return acc;
//                 }
//             },0);
        
//         await fs.writeFile('output5.json',JSON.stringify(result,null,2))
    
//     }
//     catch(error){
//         console.error(error);
//     }
    
// }
// fetchData();



// async function fetchLowestPopulationCountries() {
//     try {
//       const response = await fetch('https://restcountries.com/v3.1/all');
//       const countriesData = await response.json();
  
//       const lowestPopulationPerRegion = countriesData.reduce((acc, curr) => {
//         const region = curr.region ;
//         const population = curr.population;
//         const countryName = curr.name.common;
//         const subregion=curr.subregion;
  
//         // Update only if lower population or no existing entry for the region
//         if (!acc[region][subregion] || population < acc[region].population) {
//           acc[region][subregion] = { country: countryName, population };
//         }
        
//         return acc;
//       }, {});
  
//       console.log(lowestPopulationPerRegion);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchLowestPopulationCountries();



// async function fetchLowestPopulationCountries() {
//     try {
//       // Fetch country data from the API (unchanged)
//       const response = await fetch('https://restcountries.com/v3.1/all');
//       const data = await response.json();
  
//       // Reduce the country data to find the lowest population for each region/sub-region
//       const lowestPopulationPerRegion = data.reduce((acc, country) => {
//         const region = country.region || 'Unknown';
//         const subregion = country.subregion || 'Unknown';
//         const population = country.population;
//         const countryName = country.name.common;
  
//         // Create region and sub-region objects if they don't exist (already initialized with lowest population object)
//         acc[region] = acc[region] || {};
//         acc[region][subregion] = acc[region][subregion] || { country: '', population: Infinity }; // Initialize with defaults
  
//         // Update only if the current population is lower
//         if (population < acc[region][subregion].population) {
//           acc[region][subregion] = { country: countryName, population };
//         }
  
//         return acc;
//       }, {});
  
//       // Transform the object to a desired format with one country per region/sub-region
//       const lowestPopulationCountries = Object.entries(lowestPopulationPerRegion).map(([region, subRegionData]) => {
//         // Get the country with the lowest population for this region/sub-region
//         const lowestInRegion = subRegionData; // Already holds the lowest country object
  
//         return { region, ...lowestInRegion }; // Combine region with lowest country info
//       });
  
//       console.log('Countries with lowest population for each region/sub-region:');
//       console.log(lowestPopulationCountries);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchLowestPopulationCountries();
  
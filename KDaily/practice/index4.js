const { reduce } = require("underscore")

const data=[{"id":1,"first_name":"Valera","last_name":"Pinsent","email":"vpinsent0@google.co.jp","gender":"Male","ip_address":"253.171.63.171"},
{"id":2,"first_name":"Kenneth","last_name":"Hinemoor","email":"khinemoor1@yellowbook.com","gender":"Polygender","ip_address":"50.231.58.150"},
{"id":3,"first_name":"Roman","last_name":"Sedcole","email":"rsedcole2@addtoany.com","gender":"Genderqueer","ip_address":"236.52.184.83"},
{"id":4,"first_name":"Lind","last_name":"Ladyman","email":"lladyman3@wordpress.org","gender":"Male","ip_address":"118.12.213.144"},
{"id":5,"first_name":"Jocelyne","last_name":"Casse","email":"jcasse4@ehow.com","gender":"Agender","ip_address":"176.202.254.113"},
{"id":6,"first_name":"Stafford","last_name":"Dandy","email":"sdandy5@exblog.jp","gender":"Female","ip_address":"111.139.161.143"},
{"id":7,"first_name":"Jeramey","last_name":"Sweetsur","email":"jsweetsur6@youtube.com","gender":"Genderqueer","ip_address":"196.247.246.106"},
{"id":8,"first_name":"Anna-diane","last_name":"Wingar","email":"awingar7@auda.org.au","gender":"Agender","ip_address":"148.229.65.98"},
{"id":9,"first_name":"Cherianne","last_name":"Rantoul","email":"crantoul8@craigslist.org","gender":"Genderfluid","ip_address":"141.40.134.234"},
{"id":10,"first_name":"Nico","last_name":"Dunstall","email":"ndunstall9@technorati.com","gender":"Female","ip_address":"37.12.213.144"}]

/* 

    1. Find all people who are Agender
    2. Split their IP address into their components eg. 111.139.161.143 has components [111, 139, 161, 143]
    3. Find the sum of all the second components of the ip addresses.
    3. Find the sum of all the fourth components of the ip addresses.
    4. Compute the full name of each person and store it in a new key (full_name or something) for each person.
    5. Filter out all the .org emails
    6. Calculate how many .org, .au, .com emails are there
    7. Sort the data in descending order of first name

    NOTE: Do not change the name of this file  

*/



//1.
// const result = data.filter(item=>item.gender==='Agender');

// console.log(result);

//2.

// const result = data.map(item=>{
//     const ans = item.ip_address.split('.')
//     return ans.map(item=>Number(item));
// })

// console.log(result);

//3.


// const sum=()=>{
//     const result = data.map(item=>item.ip_address.split('.'));
//     return result.reduce((acc,curr)=>acc+Number(curr[1]),0);

// }

// console.log(sum());

//4.

// const sum=()=>{
//     const ans = data.map(item=>item.ip_address.split('.'))
//     return ans.reduce((acc,curr)=>acc+Number(curr[3]),0);
// }
// console.log(sum());

//5

// const result=()=>{
//     const newData=data.map(person=>{
//         return{
//             ...person,
//             full_name:`${person.first_name} ${person.last_name}`
//         }
//     })
//     return newData;
// }

// console.log(result());


//6.
// const result =data.filter(item=>item.email.endsWith('org'));
// console.log(result);

//7.

// const result=()=>{

//     const answer={
//         'org':data.filter(item=>item.email.endsWith('org')).length,
//         'au':data.filter(item=>item.email.endsWith('au')).length,
//         'com':data.filter(item=>item.email.endsWith('com')).length
//     }
//     return answer;
// }

// console.log(result());


// const result =()=>{
//      const ans = data.sort((a,b)=>{
//         return b.first_name.localeCompare(a.first_name);
//      });
//      return ans;
// }

// console.log(result());

// const result = ()=>{
//     const ans = data.sort((a,b)=>{
//         const nameA=a.first_name.toUpperCase();
//         const nameB = b.first_name.toUpperCase();

//         if(nameA<nameB){
//             return 1;
//         }
//         else if(nameA>nameB){
//             return -1;
//         }
//         else{
//             return 0;
//         }
//     })
//     return ans;
// }

// console.log(result());


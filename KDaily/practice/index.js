
const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, 'Playing Video Games'"],
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    },
    "Wanda": {
        age: 24,
        desgination: "Intern - Javascript",
        interests: ["Piano"],
        qualification: "Bachaelor",
        nationality: "Germany"
    },
    "Rob": {
        age: 34,
        desgination: "Senior Javascript Developer",
        interest: ["Walking his dog, Cooking"],
        qualification: "Masters",
        nationality: "USA"
    },
    "Pike": {
        age: 23,
        desgination: "Python Developer",
        interests: ["Listing Songs, Watching Movies"],
        qualification: "Bachaelor's Degree",
        nationality: "Germany"
    }
}



/*

Q1 Find all users who are interested in playing video games.
Q2 Find all users staying in Germany.
Q3 Find all users with masters Degree.
Q4 Group users based on their Programming language mentioned in their designation.


*/ 


//1. 

// const games = Object.keys(users).filter(userName=>{
//     const interests = users[userName].interests
//     return interests && interests.some(interest=>{
//         return interest.includes('Playing Video Games') || interest.includes('Video Games')
//     })
// });


// console.log(games);

//2. 

// const nationality = Object.keys(users).filter(user=>
//     users[user].nationality ==='Germany'
// );

// console.log(nationality);


//3. 
// const degree = Object.keys(users).filter(user=>
//     users[user].qualification === 'Masters'
    
//     )
//     console.log(degree);



//4. 
const res = Object.entries(users).reduce((acc,[name,user])=>{
 let language;
 if(user.desgination.toLowerCase().includes('golang')){
    language ='golang';
 }else if(user.desgination.toLowerCase().includes('javascript')){
    language = 'javascipt';
 }else if(user.desgination.toLowerCase().includes('python')){
    language ='python'
 }else{
    language ='other';
 }
 if(!acc[language]){
    acc[language] =[];
 }
 acc[language].push(name);
 return acc;
},{});

console.log(res);






// function init(){
//   var name ='nikhitha';

//   function displayName(){
//     console.log(name);
//   }
//   displayName();

// }
// init();

// const str = 'The quick brown fox jumps over the lazy dog.';

// const res = str.split();
// console.log(res);

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// console.log(Object.entries(object1));


// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42],
// ]);

// console.log(Object.fromEntries(entries));


// let name='nikhitha'
// console.log(name);

//  const name='nikhitha'
//  console.log(name);

//  var name ='nikhitha'
//  console.log(name);

// if(true){
//   let color ='green';
//   console.log(color);

//   if(true){
//     console.log(color);
//     let fruit = 'mango';
//     console.log(fruit);
//   }
//   console.log(fruit);
// }

// console.log(color);

// function name(){
//   var name = 'nikhitha'
//   console.log(name);
  
//   if(true){
//     var color ='green';
//     console.log(color);
//     console.log(name);
//   }

//   console.log(color);
// }
// name();
// console.log(name);
// console.log(color);


// console.log(x);
// var x=5;

// var x;
// console.log(x);
// x=5;

// console.log(x);
// var x=5;


// Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.
// remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
// The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.
// remix("PlOt", [1, 3, 0, 2]) ➞ "OPtl"
// remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]) ➞ "cmourpte"
// Note: Assume you'll be given a string and array of equal length, both containing valid characters (A-Z, a-z, or 0-9).


// function remix(str,array){
//   return array.reduce((acc,index,i)=>{
//     acc[index] = str[i];
//     return acc;
//   },[]).join('');
// }
// console.log(remix("abcd",[0,3,1,2]));


// function remix(str,array){
//     let result =[];
//     for(let index=0;index<array.length;index++){
//         result[array[index]]=str[index];
//     }
//     return result.join('');
// }

// console.log(remix('abcd',[0,3,1,2]));

//How does a browser render HTML, CSS, JS to DOM? What is the mechanism behind it?

// const jsonStr = '{"name":"John","age":30,"city":"New York"}';
// const person = JSON.parse(jsonStr);

// console.log(person);


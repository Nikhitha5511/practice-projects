const users = {
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        interests: ["Chess, Reading Comics, Playing Video Games"],
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
        interests: ["Walking his dog, Cooking"],
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
Q2 Find all users staying in Germany
Q3 Sort users based on their seniority level 
   for Designation - Senior Developer > Developer > Intern
   for Age - 20 > 10
Q4 Find all users with masters Degree.
Q5 Group users based on their Programming language mentioned in their designation.

NOTE: Do not change the name of this file

*/ 




// const games=Object.keys(users).filter(userName=>{
//     const interests = users[userName].interests;
//     return interests && interests.some(interest=>
//         interest.includes('Video Games') || interest.includes('Playing Video Games')
//         );
// });
// //console.log(games);


// const stay=Object.keys(users).filter(user=>users[user].nationality==='Germany');
// //console.log(stay);

// const sortedUsers = Object.keys(users).sort((a, b) => {
//     const seniority = {
//         "Senior Golang Developer": 3,
//         "Senior Javascript Developer": 3,
//         "Golang Developer": 2,
//         "Python Developer": 2,
//         "Javascript Developer": 2,
//         "Intern - Golang": 1,
//         "Intern - Javascript": 1
//     };

//     const userA = users[a];
//     const userB = users[b];
//     console.log(userA);
//     console.log(userB);

//     if (seniority[userA.desgination] !== seniority[userB.desgination]) {
//         return seniority[userB.desgination] - seniority[userA.desgination];
//     } else {
//         return userB.age - userA.age;
//     }
// });

// console.log("Sorted users:", sortedUsers);


// const masters =Object.keys(users).filter(user=>users[user].qualification==='Masters');
// //console.log(masters);


// const groupUsers=Object.keys(users).reduce((acc,curr)=>{
//     const desgination = users[curr].desgination.toLowerCase();
//     const programmingLanguage= desgination.split(" ")[0];

//     if(!acc[programmingLanguage]){
//         acc[programmingLanguage]=[];
//     }
//     acc[programmingLanguage].push(curr);
//     return acc;
// },{})
// //console.log(groupUsers);


// 




// 4


// const games=Object.keys(users).filter(user=>{
//     const item = users[user].interests
//     return item && item.some(interest=>interest.includes('Video Games') || interest.includes('Playing Video Games'))
// })

// console.log(games);


// 2

// const place=Object.keys(users).filter(user=>users[user].nationality==='Germany')
// console.log(place);


// const sortOrder=Object.keys(users).sort((a,b)=>{
//     let seniority={
//         "Senior Golang Developer":3,
//         "Senior Javascript Developer":3,
//         "Golang Developer":2,
//         "Python Developer":2,
//         "Javascript Developer":2,
//         "Intern - Golang":1,
//          "Intern - Javascript":1

//     };

//     const userA=users[a];
//     const userB = users[b];
//     // console.log(userA);
//     // console.log(userB);

//    if(seniority[userA.desgination!=userB.desgination]){
//     return userB.desgination-userA.desgination;
//    }
//    else{
//     return userB.age-userA.age;
//    }

// })


// console.log(sortOrder);



const groupDev=Object.keys(users).reduce((acc,curr)=>{
    const  desgination = users[curr]. desgination.toLowerCase();
    const program =  desgination.split(" ")[0];

    if(!acc[program]){
        acc[program]  =[];
    }
        acc[program].push(curr);
    

    return acc;

},{});

console.log(groupDev);
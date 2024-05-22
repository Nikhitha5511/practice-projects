const data = {
    Matrix: {
      imdbRating: 8.3,
      actors: ["Keanu Reeves", "Carrie-Anniee"],
      oscarNominations: 2,
      genre: ["sci-fi", "adventure"],
      totalEarnings: "$680M",
    },
    FightClub: {
      imdbRating: 8.8,
      actors: ["Edward Norton", "Brad Pitt"],
      oscarNominations: 6,
      genre: ["thriller", "drama"],
      totalEarnings: "$350M",
    },
    Inception: {
      imdbRating: 8.3,
      actors: ["Tom Hardy", "Leonardo Dicaprio"],
      oscarNominations: 12,
      genre: ["sci-fi", "adventure"],
      totalEarnings: "$870M",
    },
    "The Dark Knight": {
      imdbRating: 8.9,
      actors: ["Christian Bale", "Heath Ledger"],
      oscarNominations: 12,
  
      genre: ["thriller"],
      totalEarnings: "$744M",
    },
    "Pulp Fiction": {
      imdbRating: 8.3,
  
      actors: ["Sameul L. Jackson", "Bruce Willis"],
      oscarNominations: 7,
      genre: ["drama", "crime"],
      totalEarnings: "$455M",
    },
    Titanic: {
      imdbRating: 8.3,
      actors: ["Leonardo Dicaprio", "Kate Winslet"],
      oscarNominations: 13,
      genre: ["drama"],
      totalEarnings: "$800M",
    },
  };
  

  
  /*
      NOTE: For all questions, the returned data must contain all the movie information including its name.
  
      Q1. Find all the movies with total earnings more than $500M. 
      Q2. Find all the movies who got more than 3 oscarNominations and also totalEarning are more than $500M.
      Q.3 Find all movies of the actor "Leonardo Dicaprio".
      Q.4 Sort movies (based on IMDB rating)
          if IMDB ratings are same, compare totalEarning as the secondary metric.
      Q.5 Group movies based on genre. Priority of genres in case of multiple genres present are:
          drama > sci-fi > adventure > thriller > crime
  
      NOTE: Do not change the name of this file
  */


// Find the number of movies for each genre
// Find the number of movies for each genre for each year
// Find the average earning in million for each genre

//1.

// const res = Object.entries(favouritesMovies)
// .filter(([movies,details])=>parseInt(details.totalEarnings.slice(1,-1))>500);
// // .map(([movies,details])=>({movies,details}));

// console.log(res);

//2.

// const res = Object.entries(favouritesMovies)
// .filter(([movies,details])=>details.oscarNominations>3 && parseInt(details.totalEarnings.slice(1,-1))>500);

// console.log(res);

//3 

// const res = Object.entries(favouritesMovies)
// .filter(([movies,details])=>details.actors.includes('Leonardo Dicaprio'))
// .map(([movie, details]) => ({ movie, actors:details.actors.join(','), details }));


// console.log(res);

//4. 

// const res = Object.entries(favouritesMovies)
// .sort(([,a],[,b])=>{
//   if(a.imdbRating !== b.imdbRating){
//     return b.imdbRating-a.imdbRating;
//   }
//   else{
//     return parseInt(b.totalEarnings.slice(1,-1))-parseInt(a.totalEarnings.slice(1,-1));
//   }
// });

// console.log(res);



//5. 

// const priority=['drama','sci-fi','adventure','thriller','crime'];

// const res = Object.entries(favouritesMovies).reduce((acc,[movie,details])=>{
//   details.genre.forEach(item=>{
//     if([priority.includes(item)]){
//       if(!acc[item]){
//         acc[item] =[];
//       }
//       acc[item].push({movie,details});
//     }
//   })
//   return acc;
// },{});

// console.log(res);





// const res = Object.entries(favouritesMovies)
// .filter(([movie,details])=>parseInt(details.totalEarnings.slice(1,-1))>500)
// .map(([movie,details])=>({movie,details}));

// console.log(res);
            

// const res =Object.entries(favouritesMovies)
// .filter(([movie,details])=>details.oscarNominations>3 && parseInt(details.totalEarnings.slice(1,-1))>500)
// .map(([movie,details])=>({movie,details}));

// console.log(res);


// const res = Object.keys(data)
// .reduce((acc,movie)=>{
//   if(data[movie].actors.includes('Leonardo Dicaprio')){
//     acc[movie] = data[movie]
//   }
//   return acc;
// },{});

// console.log(res);


// const res = Object.keys(data)
// .reduce((acc,movie)=>{
//   if(parseInt(data[movie].totalEarnings.slice(1,-1))>500){
//     acc[movie] = data[movie];
//   }
//   return acc;
// },{});

// console.log(res);


// const res = Object.keys(data)
// .reduce((acc,movie)=>{
//   if(data[movie].oscarNominations>3 && parseInt(data[movie].totalEarnings.slice(1,-1))>500){
//     acc[movie] = data[movie]
//   }
//   return acc;
// },{})

// console.log(res);


// const res = Object.entries(data)
// .sort(([,a],[,b])=>{
//   if(a.imdbRating !== b.imdbRating){
//     return b.imdbRating-a.imdbRating;
//   }
//   else{
//     return parseInt(b.totalEarnings.slice(1,-1))-parseInt(a.totalEarnings.slice(1,-1));
//   }
// });

// console.log(res);


// const priority = ['drama','sci-fi','adventure','thriller','crime'];

// const res = Object.entries(data).reduce((acc,[movie,details])=>{
//   details.genre.forEach(item=>{
//     if(priority.includes(item)){
//       if(!acc[item]){
//         acc[item] = [];
//       }
//       acc[item].push({movie,details})
//     }
//   })
//   return acc;
// },{});

// console.log(res);


// const result = Object.keys(data).reduce((acc,curr)=>{
//    if(data[curr].totalEarnings.slice(1,-1)>500){
//     acc[curr]=data[curr];
//    }
//    return acc;
// },{})
// console.log(result);


// const result = Object.keys(data).reduce((acc,curr)=>{
//   if(data[curr].oscarNominations>3 && data[curr].totalEarnings.slice(1,-1)>500){
//     acc[curr] =data[curr];
//   }
//   return acc;
// },{});

// console.log(result);

// const result =Object.keys(data).reduce((acc,curr)=>{

// if(data[curr].actors.includes('Leonardo Dicaprio')){
//   acc[curr] =data[curr];
// }
// return acc;

// },{});

// console.log(result);  
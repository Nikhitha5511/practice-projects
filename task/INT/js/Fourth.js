
// /*
// NOTE: Do not change the name of this file

// * Ensure that error handling is well tested.
// * If there is an error at any point, the subsequent solutions must not get executed.
// * Solutions without error handling will get rejected and you will be marked as having not completed this drill.

// * Usage of async and await is not allowed.

// Users API url: https://jsonplaceholder.typicode.com/users
// Todos API url: https://jsonplaceholder.typicode.com/todos

// Users API url for specific user ids : https://jsonplaceholder.typicode.com/users?id=2302913
// Todos API url for specific user Ids : https://jsonplaceholder.typicode.com/todos?userId=2321392

// Using promises and the `fetch` library, do the following. 

// 1. Fetch all the users
// 2. Fetch all the todos
// 3. Use the promise chain and fetch the users first and then the todos.
// 4. Use the promise chain and fetch the users first and then all the details for each user.
// 5. Use the promise chain and fetch the first todo. Then find all the details for the user that is associated with that todo

// NOTE: If you need to install `node-fetch` or a similar libary, let your mentor know before doing so along with the reason why. No other exteral libraries are allowed to be used.

// Usage of the path libary is recommended


// */

// function fetchUsers() {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => {
//             console.log('All users:', data);
            
//         });
//         .catch(error => {
//             console.error('Error fetching users:', error);
//         });
// }

// //fetchUsers();

// const fetchTodos=()=>{
//     return fetch(`https://jsonplaceholder.typicode.com/todos`)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// }
// //fetchTodos();

// const fetchUsersTodos=()=>{
//     return fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log("users",data);
//         return fetch(`https://jsonplaceholder.typicode.com/todos`)
//         .then(response=>response.json())
//         .then(data=>{
//             console.log("todos",data)
//         })
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
    
// }

// //fetchUsersTodos();


// const fetchUserDeatils=(userId)=>{
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response=>{
//         return response.json();
//     })

// };
// const fetchDeatils=()=>{
//     return fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(response=>{
//         return response.json();
//     })
//     .then(users=>{
//         const userDetails =users.map(user=>fetchUserDeatils(user.id));
//         return Promise.all(userDetails);
//     })
//     .then(data=>{
//         console.log("data",data)
//     })
//     .catch(error=>{
//         console.error(error);
//     })
// }

// //fetchDeatils();

// const fetchTodoUser=()=>{
//     return fetch(` https://jsonplaceholder.typicode.com/todos`)
//     .then(response=>{
//         return response.json();
//     })
//     .then(todos=>{
//         const firstToDo = todos[0];
//         console.log("first Todo",firstToDo);

//         return fetch(`https://jsonplaceholder.typicode.com/users/${firstToDo.userId}`)
//         .then(response=>{
//             return response.json();
//         })
//         .then(data=>{
//             console.log("user Details",data);
//         })
//         .catch(error=>{
//             console.error(error);
//         })
//     })
// }
// fetchTodoUser();





const favouritesMovies = {
    "Matrix": {
        imdbRating: 8.3,
        actors: ["Keanu Reeves", "Carrie-Anniee"],
        oscarNominations: 2,
        genre: ["sci-fi", "adventure"],
        totalEarnings: "$680M"
    },
    "FightClub": {
        imdbRating: 8.8,
        actors: ["Edward Norton", "Brad Pitt"],
        oscarNominations: 6,
        genre: ["thriller", "drama"],
        totalEarnings: "$350M"
    },
    "Inception": {
        imdbRating: 8.3,
        actors: ["Tom Hardy", "Leonardo Dicaprio"],
        oscarNominations: 12,
        genre: ["sci-fi", "adventure"],
        totalEarnings: "$870M"
    },
    "The Dark Knight": {
        imdbRating: 8.9,
        actors: ["Christian Bale", "Heath Ledger"],
        oscarNominations: 12,
        genre: ["thriller"],
        totalEarnings: "$744M"
    },
    "Pulp Fiction": {
        imdbRating: 8.3,
        actors: ["Sameul L. Jackson", "Bruce Willis"],
        oscarNominations: 7,
        genre: ["drama", "crime"],
        totalEarnings: "$455M"
    },
    "Titanic": {
        imdbRating: 8.3,
        actors: ["Leonardo Dicaprio", "Kate Winslet"],
        oscarNominations: 13,
        genre: ["drama"],
        totalEarnings: "$800M"
    }
}


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


const movies =()=>{
    const res = Object.entries(favouritesMovies).filter(([movie,details])=>{
      return Number(details.totalEarnings.slice(1,-1))>500;
    });
    return res;
}

//console.log(movies());


const details=()=>{
    const data = Object.entries(favouritesMovies).filter(([movie,details])=>{
    return Number(details.totalEarnings.slice(1,-1))>500 && details.oscarNominations>3;
    })
    return data;
}

//console.log(details());

const actor=()=>{
    const data = Object.entries(favouritesMovies).filter(([movie,details])=>{
    return details.actors.includes('Leonardo Dicaprio')
    }).map(([movie,details])=>{
     return details;
    })
    return data;
}

//console.log(actor());

const sortMovies=()=>{
    const data=Object.entries(favouritesMovies).sort((a,b)=>{
        if(a[1].imdbRating !== b[1].imdbRating){
            return b[1].imdbRating-a[1].imdbRating;
        }
        else{
            return Number(b[1].totalEarnings.slice(1,-1)-a[1].totalEarnings.slice(1,-1));
        }
    })
    return data;
}


//console.log(sortMovies());

const groupMovies = () => {
    let priority = ["drama", "sci-fi", "adventure", "thriller", "crime"];
    let final={};

    priority.forEach(genre=>{
        final[genre]=[];
    })
    
    Object.entries(favouritesMovies).forEach(([movie,details])=>{
    details.genre.forEach(genre=>{
        if(priority.includes(genre)){
            final[genre].push(movie);
        }
    })
    })
    return final;
}

console.log(groupMovies());


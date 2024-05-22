const products = [{
    shampoo: {
        price: "$50",
        quantity: 4
    },
    "Hair-oil": {
        price: "$40",
        quantity: 2,
        sealed: true
    },
    comb: {
        price: "$12",
        quantity: 1
    },
    utensils: [
        {
            spoons: { quantity: 2, price: "$8" }
        }, {
            glasses: { quantity: 1, price: "$70", type: "fragile" }
        },{
            cooker: { quantity: 4, price: "$900" }
        }
    ],
    watch: {
        price: "$800",
        quantity: 1,
        type: "fragile"
    }
}]


/*

Q1. Find all the items with price more than $65.
Q2. Find all the items where quantity ordered is more than 1.
Q.3 Get all items which are mentioned as fragile.
Q.4 Find the least and the most expensive item for a single quantity.
Q.5 Group items based on their state of matter at room temperature (Solid, Liquid Gas)

NOTE: Do not change the name of this file

*/ 


const userDetailsArray = [
    {
        "id": "600dc3b5d617e547a0e74cb9",
        "name": "Mitchell Fitzgerald",
        "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
        "address": "48 Flatlands Avenue, Cutter, North Dakota",
        address: {
            streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
            city: 'North Dakota'
        },
        "company": "Scenty"
    },
    {
        "id": "600dc3b5c4e60ba2ebf06569",
        "name": "Howell Faulkner",
        "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
        address: {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
        },
        "company": "Fleetmix"
    }
]


// Q.2 Get all addresses from userDetailsArray using reduce Function and return the result in the following format

// Response : 
// {
//     600dc3b5d617e547a0e74cb9: {
//         streetAddress: '48 Flatlands Avenue',
//             neighbour: 'Cutter',
//                 city: 'North Dakota'
//     },
//     600dc3b5c4e60ba2ebf06569: {
//         streetAddress: '77 Hemlock Street',
//             neighbour: 'Hasty',
//                 city: 'Florida'
//     }

// }


// Q5. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
// Response: 
// [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, "North Dakota", "Scenty"]

const league_data = {
    manutd: {
        name: "Manchester United FC",
        table: {
            played: 38,
            wins: 27,
            loss: 6,
            draws: 5
        }
    },
    livepool: {
        name: "Liverpool FC",
        table: {
            played: 38,
            wins: 29,
            loss: 8,
            draws: 1
        }
    },
    chelsea: {
        name: "Chelsea FC",
        table: {
            played: 38,
            wins: 23,
            loss: 3,
            draws: 12
        }
    },
    arsenal: {
        name: "Arsenal FC",
        table: {
            played: 38,
            wins: 26,
            loss: 11,
            draws: 1
        }
    }, mancity: {
        name: "Manchester City FC",
        table: {
            played: 38,
            wins: 31,
            loss: 5,
            draws: 2
        }
    }, spurs: {
        name: "Tottenham Hotspur FC",
        table: {
            played: 38,
            wins: 21,
            loss: 12,
            draws: 5
        }
    }
};


/*

Q1. Add 'pts' property to the table. .
    Pts calculation:  win = 3 pts , draw = 1pt , loss = 0 pts.
Q2. Sort the data based on the highest to lowest pts.
    If two teams have same pts ..sort them based on name.
Q3. Write a method to generate data in the following form
    {
        team: [wins, losses], 
    }
Q4. Copy the league_data into another object.

*/

const Employess = [
    { id: 232343, name: "P. T  Ruud", department: "Computer Science", place: "Germany"},
    { id: 232139, name: "Charles Xavier", department: "Mathematics", place: "Germany"},
    { id: 239922, name: "M. S Styris", department: "Computer Science", place: "France"},
    { id: 232348, name: "Mark Cook", department: "Philosophy", place: "Germany"},
    { id: 232888, name: "Howard Pack", department: "Computer Science", place: "France"},
    { id: 232288, name: "Travis Lei", department: "Computer Science", place: "India"},
    { id: 283920, name: "Silver Stone", department: "Philosophy", place: "India"},
    { id: 732873, name: "Carlton Baugh", department: "Mathematics", place: "Austria"},
    { id: 732343, name: "Jade Lee", department: "English", place: "Japan"},
    { id: 742343, name: "Xavi Herrera", department: "English", place: "Spain"}
];

// Q.1     Group employees by department in the given order (computer science, english, maths, philosophy)
// Q.2     Group employees by place (Europe or Asia)
// Q.3     Group employees by departments [enginneering { computer science + mathematics }, linguistic { philosophy + english }]
// Q.4     Filter employees from Germany and are from deparment Computer Science


// Find the number of countries in Europe
// Find the number of countries per region
// Find the number of countries per subregion per region
// Find the country with lowest population per sub region per region

// {
//     'Engineering': [...allthenames],
//     'Linguistic': [...allthenames]
// }



function items(){
    let expensiveItems=[];

    for(let key in products[0]){
        const item = products[0][key];
        //console.log(item);

        if(!Array.isArray(item)){
            if(item.price && Number(item.price.slice(1))>65){
                expensiveItems.push({[key]:item});
            }
        }
        else{
            for(let utensil of item){
                for(let key in utensil){
                    const utensilItem = utensil[key];
                    //console.log(utensilItem);
                    if(utensilItem.price && Number(utensilItem.price.slice(1))>65){
                        expensiveItems.push({[key]:item});
                    }
                }
            }
        }

    }
    console.log(expensiveItems);
}

items();


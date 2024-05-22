const products = [{
    shampoo: {            //liquid
        price: "$50",
        quantity: 4
    },
    "Hair-oil": {
        price: "$40",
        quantity: 2,     //liquid
        sealed: true
    },
    comb: {
        price: "$12",
        quantity: 1          //solid
    },
    utensils: [
        {
            spoons: { quantity: 2, price: "$8" }   //solid
        }, {
            glasses: { quantity: 1, price: "$70", type: "fragile" }  //solid
        },{
            cooker: { quantity: 4, price: "$900" }           //solid
        } 
    ],
    watch: {
        price: "$800",
        quantity: 1,
        type: "fragile"
    }
}]          //solid


/*

Q1. Find all the items with price more than $65.
Q2. Find all the items where quantity ordered is more than 1.
Q.3 Get all items which are mentioned as fragile.
Q.4 Find the least and the most expensive item for a single quantity.
Q.5 Group items based on their state of matter at room temperature (Solid, Liquid Gas)

NOTE: Do not change the name of this file

*/ 

//1.

// function getItems(){
//   const expensiveItems =Object.entries(products[0]).reduce((result,[key,value])=>{
//       if(!Array.isArray(value)){
//         if(Number(value.price.slice(1))>65){
//             result.push({[key]:value})
//         }
//       }else{
//         value.forEach(utensil=>{
//             Object.entries(utensil).forEach(([utensilKey,utensilValue])=>{
//                 if(Number(utensilValue.price.slice(1))>65){
//                     result.push({[utensilKey]:utensilValue})
//                 }
//             })
//         })
//       }
//       return result;
//   },[]);
//   return expensiveItems;
// }

//console.log(getItems());

//2.


// function getQuantity(){
//     const quantity = Object.entries(products[0]).reduce((result,[key,value])=>{
//         if(!Array.isArray(value)){
//             if(value.quantity >1){
//                 result.push({[key]:value})
//             }
//         }else{
//             value.forEach(utensil=>{
//                 Object.entries(utensil).forEach(([utensilKey,utensilValue])=>{
//                     if(utensilValue.quantity>1){
//                         result.push({[utensilKey]:utensilValue})
//                     }
//                 })
//             })
//         }
//         return result;
//     },[])
//     return quantity;
// }

// console.log(getQuantity());


// function getQuantity(){

//     const quantity=Object.entries(products[0]).reduce((result,[key,value])=>{
//         if(!Array.isArray(value)){
//             if(value.quantity>1){
//                 result.push({[key]:value})
//             }
//         }
//         else{
//             value.map(utensil=>{
//                 Object.entries(utensil).forEach(([utensilKey,utensilValue])=>{
//                     if(utensilValue.quantity>1){
//                         result.push({[utensilKey]:utensilValue})
//                     }
//                 })
//             })
//         }
//         return result;
//     },[])
//     return quantity;
// }
//  console.log(getQuantity());





// function groupItems() {
//     let groupedItems = {
//         Liquid: [],
//         Solid: [],
//         Fragile: []
//     };

//     for (let key in products[0]) {
//         const item = products[0][key];

//         if (Array.isArray(item)) {
//             for (let utensil of item) {
//                 for (let utensilKey in utensil) {
//                     const utensilItem = utensil[utensilKey];
//                     if (utensilItem.type === 'fragile') {
//                         groupedItems.Fragile.push({ [utensilKey]: utensilItem });
//                     } else {
//                         groupedItems.Solid.push({ [utensilKey]: utensilItem });
//                     }
//                 }
//             }
//         } else {
//             if (item.type === 'fragile') {
//                 groupedItems.Fragile.push({ [key]: item });
//             } else if (key === 'shampoo' || key === 'Hair-oil') {
//                 groupedItems.Liquid.push({ [key]: item });
//             } else {
//                 groupedItems.Solid.push({ [key]: item });
//             }
//         }
//     }

//     return groupedItems;
// }

// console.log(groupItems());



function groupItems(){
    const groupedItems={
        solid:[],
        liquid:[],
        fragile:[]
    }
    
    for(let key in products[0]){
        const item = products[0][key];

        if(Array.isArray(item)){
            for(let utensil of item){
                for(let utensilKey in utensil){
                    const utensilItem =utensil[utensilKey];
                    
                    if(utensilItem.type === 'fragile'){
                        groupedItems.fragile.push({[utensilKey]:utensilItem});
                    }
                   else{
                      groupedItems.solid.push({[utensilItem]:utensilKey});
                   }
                }
            }
        }
        else{
            if(item.type==='fragile'){
                groupedItems.fragile.push({[key]:item})
            }
            else if(key ==='shampoo'|| key ==='Hair-oil'){
                groupedItems.liquid.push({[key]:item})
            }
            else{
                groupedItems.solid.push({[key]:item});
            }
        }
    }
    return groupedItems;
}

console.log(groupItems());







//3.

// function getFragile(){
//     const fragileItem = Object.entries(products[0]).reduce((result,[key,value])=>{
//         if(!Array.isArray(value)){
//             if(value.type==='fragile'){
//                 result.push({[key]:value})
//             }
//         }
//         else{
//             value.forEach(utensil=>{
//                 Object.entries(utensil).forEach(([utensilKey,utensilValue])=>{
//                     if(utensilValue.type==='fragile'){
//                         result.push({[utensilKey]:utensilValue})
//                     }
//                 })
//             })
//         }
//         return result;
//     },[])
//     return fragileItem;
// }

// console.log(getFragile());


// const singleQuantityItems = products.reduce((acc, product) => {
//     // Iterate over each item in the product
//     Object.entries(product).forEach(([itemName, itemDetails]) => {
//         if (!Array.isArray(itemDetails)) {
//             // Check if the item has a quantity of 1
//             if (itemDetails.quantity === 1) {
//                 acc.push([itemName, itemDetails]);
//             }
//         } else {
//             // Iterate over each utensil in the item
//             itemDetails.forEach(utensil => {
//                 const utensilName = Object.keys(utensil)[0];
//                 const utensilDetails = utensil[utensilName];
//                 // Check if the utensil has a quantity of 1
//                 if (utensilDetails.quantity === 1) {
//                     acc.push([utensilName, utensilDetails]);
//                 }
//             });
//         }
//     });
//     return acc;
// }, []);


// // Extract prices of single quantity items
// const prices = singleQuantityItems.map(([itemName, itemDetails]) => {
//     if (!Array.isArray(itemDetails)) {
//         return parseInt(itemDetails.price.slice(1));
//     } else {
//         return itemDetails.reduce((maxPrice, utensil) => {
//             const utensilPrice = parseInt(utensil[Object.keys(utensil)[0]].price.slice(1));
//             return Math.max(maxPrice, utensilPrice);
//         }, 0);
//     }
// });

// // Find least and most expensive items
// const leastExpensiveItemIndex = prices.indexOf(Math.min(...prices));
// const mostExpensiveItemIndex = prices.indexOf(Math.max(...prices));
// const leastExpensiveItem = singleQuantityItems[leastExpensiveItemIndex];
// const mostExpensiveItem = singleQuantityItems[mostExpensiveItemIndex];

// console.log("Least Expensive Item for a Single Quantity:", leastExpensiveItem);
// console.log("Most Expensive Item for a Single Quantity:", mostExpensiveItem);





// function groupItemsByState() {
//     const itemsByState = {
//         Solid: [],
//         Liquid: [],
//         Gas: [],
//         fragile: []
//     };
                 
//     Object.entries(products[0]).forEach(([key, value]) => {
//         if (!Array.isArray(value)) {
//             if (value.type) {
//                 itemsByState.type.push({ [key]: value });
//             }
//         } else {
//             value.forEach(utensil => {
//                 Object.entries(utensil).forEach(([utensilKey, utensilValue]) => {
//                     if (utensilValue.type) {
//                         itemsByState.type.push({ [utensilKey]: utensilValue });
//                     }
//                 });
//             });
//         }
//     });

//     console.log("Items Grouped by State of Matter:", itemsByState);
// }
      
// //groupItemsByState();










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
        "address":"77 Hemlock Street,Hasty,Florida",
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


const result=()=>{
    const res = userDetailsArray.reduce((acc,curr)=>{
        acc[curr.id]={
            ' streetAddress':curr.address.split(',')[0],
            'neighbour' :curr.address.split(',')[1],
            'city' :curr.address.split(',')[2]
        }
        return acc;
    },{});
    return res;
}
//console.log(result());


// Q5. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
// Response: 
// [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, "North Dakota", "Scenty"]


const flatten=()=>{
   const ans = userDetailsArray.filter(item=>item.address.city.includes('North Dakota'))
               .flatMap(item=>{
                const{id,name,company}=item;
                return[
                    {id,name}, 'North Dakota',company]
               })
    return ans;
}


console.log(flatten())

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



// const groupedByDepartment = Employess.reduce((acc, employee) => {
//     if (!acc[employee.department]) {
//         acc[employee.department] = [];
//     }
//     acc[employee.department].push(employee.name);
//     return acc;
// }, {});

// // Arrange in the given order
// const departmentOrder = ['Computer Science', 'English', 'Mathematics', 'Philosophy'];
// const resultQ1 = departmentOrder.reduce((acc, department) => {
//     if (groupedByDepartment[department]) {
//         acc[department] = groupedByDepartment[department];
//     }
//     return acc;
// }, {});

// //console.log(resultQ1);


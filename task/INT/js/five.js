// const items = [{
//     name: 'Orange',
//     available: true,
//     contains: "Vitamin C",
// }, {
//     name: 'Mango',
//     available: true,
//     contains: "Vitamin K, Vitamin C",
// }, {
//     name: 'Pineapple',
//     available: true,
//     contains: "Vitamin A",
// }, {
//     name: 'Raspberry',
//     available: false,
//     contains: "Vitamin B, Vitamin A",

// }, {
//     name: 'Grapes',
//     contains: "Vitamin D",
//     available: false,
// }];


// /*

//     1. Get all items that are available 
//     2. Get all items containing only Vitamin C.
//     3. Get all items containing Vitamin A.
//     4. Group items based on the Vitamins that they contain in the following format:
//         {
//             "Vitamin C": ["Orange", "Mango"],
//             "Vitamin K": ["Mango"],
//         }
        
//         and so on for all items and all Vitamins.
//     5. Sort items based on number of Vitamins they contain.

//     NOTE: Do not change the name of this file

// */ 


// const available=()=>{
//     const res = items.filter(item=>item.available);
//     return res;
// }

// //console.log(available());

// const vitaminC=()=>{
//     const res=items.filter(item=>item.contains==='Vitamin C');
//     return res;
// }

// //console.log(vitaminC());

// const vitaminA=()=>{
//     const res = items.filter(item=>item.contains.includes('Vitamin A'));
//     return res;
// }

// //console.log(vitaminA());

// const groupItems=()=>{
//    const res=items.reduce((acc,curr)=>{
//     const vitamins = curr.contains.split(',').map(item=>item.trim());
//     vitamins.forEach(vitamin=>{
//         if(!acc[vitamin]){
//             acc[vitamin]=[];
//         }
//         acc[vitamin].push(curr.name);
//     })
//     return acc;
//    },{});
//    return res;
// }

// //console.log(groupItems());


// const sortItems=()=>{
//     const res = items.sort((a,b)=>{
//         const vitaminA=a.contains.split(',').length;
//         const vitaminB =b.contains.split(',').length;
//         return vitaminA-vitaminB;
//     })
//     return res;
// }


// console.log(sortItems());



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



function items(){
    let expensiveItems=[];

    for(let key in products[0]){
        const item = products[0][key];
        //console.log(item);

        if(!Array.isArray(item)){
            if(item.price && Number(item.price.slice(1))>65){
                expensiveItems.push({[key]:item})
            }
        }
        else{
            for(let utensil of item){
                for(let key in utensil){
                const utensilItem = utensil[key];
                console.log(utensilItem);
                if(utensilItem.price && Number(utensilItem.price.slice(1))>65){
                    expensiveItems.push({[key]:utensilItem})
                }
                }
            }
        }
    
    }
    //console.log(expensiveItems);
}

//items();


function quantity(){
    let quantityItems=[];

    for(let key in products[0]){
        const item = products[0][key];

        if(!Array.isArray(item)){
            if(item.quantity && item.quantity>1){
                quantityItems.push({[key]:item})
            }
        }
        else{
            for(let utensil of item){
                for(let key in utensil){
                    const utensilItem =utensil[key];
                    if(utensilItem.quantity && utensilItem.quantity>1){
                        quantityItems.push({[key]:utensilItem});
                    }
                }
            }
        }
    }
   console.log(quantityItems);
}

//quantity();


function fragile(){
    let fragileItems=[];

    for(let key in products[0]){
        const item = products[0][key]

        if(!Array.isArray(item)){
            if(item.type && item.type==='fragile'){
                fragileItems.push({[key]:item});
            }
        }
        else{
            for(let utensil of item){
                for(let key in utensil){
                    const utensilItem = utensil[key]
                    if(utensilItem.type && utensilItem.type==='fragile'){
                        fragileItems.push({[key]:utensilItem});
                    }
                }
            }
        }
    }
    console.log(fragileItems);
}

//fragile();


// function findLeastAndMostExpensive() {
//     let leastExpensiveItem = { name: "", price: Infinity };
//     let mostExpensiveItem = { name: "", price: 0 };

//     for (const key in products[0]) {
//         const item = products[0][key];

//         let totalPrice = 0;

//         if (!Array.isArray(item)) {
//             totalPrice = parseInt(item.price.slice(1));
//         } else {
//             for (const utensil of item) {
//                 for (const utensilKey in utensil) {
//                     const utensilItem = utensil[utensilKey];
//                     const price = parseInt(utensilItem.price.slice(1));
//                     totalPrice += price * utensilItem.quantity;
//                 }
//             }
//         }

//         if (totalPrice < leastExpensiveItem.price) {
//             leastExpensiveItem.name = key;
//             leastExpensiveItem.price = totalPrice;
//         }

//         if (totalPrice > mostExpensiveItem.price) {
//             mostExpensiveItem.name = key;
//             mostExpensiveItem.price = totalPrice;
//         }
//     }

//     console.log("Least Expensive Item:", leastExpensiveItem);
//     console.log("Most Expensive Item:", mostExpensiveItem);
// }

// findLeastAndMostExpensive();



function groupItemsByState() {
    const itemsByState = {
        Solid: [],
        Liquid: [],
        Gas: []
    };

    for (let key in products[0]) {
        const item = products[0][key];

        if (!Array.isArray(item)) {
            if (item.type) {
                itemsByState[item.type].push({ [key]: item });
            }
        } else {
            for (let utensil of item) {
                for (let utensilKey in utensil) {
                    if (utensil[utensilKey].type) {
                        itemsByState[utensil[utensilKey].type].push({ [utensilKey]: utensil[utensilKey] });
                    }
                }
            }
        }
    }

    console.log("Items Grouped by State of Matter:", itemsByState);
}

// groupItemsByState();

      

// function groupItemsByState() {
//     const itemsByState = {
//         Solid: [],
//         Liquid: [],
//         Gas: []
//     };

//     for (let key in products[0]) {
//         const item = products[0][key];

//         if (!Array.isArray(item)) {
//             if (item.type) {
//                 itemsByState[item.type].push({ [key]: item });
//             }
//         } else {
//             for (let utensil of item) {
//                 for (let utensilKey in utensil) {
//                     if (utensil[utensilKey].type) {
//                         if (!itemsByState[utensil[utensilKey].type]) {
//                             itemsByState[utensil[utensilKey].type] = [];
//                         }
//                         itemsByState[utensil[utensilKey].type].push({ [utensilKey]: utensil[utensilKey] });
//                     }
//                 }
//             }
//         }
//     }

//     console.log("Items Grouped by State of Matter:", itemsByState);
// }

// groupItemsByState();



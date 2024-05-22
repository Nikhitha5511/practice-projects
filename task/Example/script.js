/* Question no 9  & 10 */


// You are given an array of product objects, each with a name, price, and discount percentage. Your task is to filter the products that have a discount and calculate the total discount amount.

// const products = [
//   { name: "Milk", price: 50, discount: 10 }, // 10% discount
//   { name: "Tea", price: 30, discount: 20 }, // 20% discount
//   { name: "Rusk", price: 40, discount: 0 },  // No discount
//   { name: "Cup", price: 60, discount: 15 }, // 15% discount
// ];

// Output:  20

const products = [
      { name: "Milk", price: 50, discount: 10 }, // 10% discount
      { name: "Tea", price: 30, discount: 20 }, // 20% discount
      { name: "Rusk", price: 40, discount: 0 },  // No discount
      { name: "Cup", price: 60, discount: 15 }, // 15% discount
    ];







 /* Question 11 Difference between map reduce or filter */


 /* question no 4 fetch API  & 5 theory on fetch why we need 2 time .then*/

// let ap = fetch("https://api.github.com/users");
// ap.then((res) => res.json())
// .then(data=> {
//    let x = document.getElementById("login");

//   for(let i = 0; i < data.length; i++){
//     let a = document.createElement("h1");
//          // a.append(data[i].login);
//          a.innerText=data[i].login;
//     x.append(a);
     
//   }
// })


 /* console.log(data[0].login) */  // )






 
   /* Question no 3 DOM */

// let btn = document.getElementById("btn");


// btn.addEventListener('click', () =>{
//    if(document.getElementById("list").style.display == "block"){
//     document.getElementById("list").style.display = "none";
//    }
//    else{
//     document.getElementById("list").style.display = "block";
//    } 
// });



   /* Question no 1 DSA */
let a = [1,2,3,4,5,6,7,8,10];


// for(let i = 0; i < a.length ; i++){
//     if (i+1 !== a[i]){
//         console.log(i+1);
//         i++;
//     }
// }



   /* Question no 2 DSA */
let i = 1;
a.map((item) =>{
 if (item !== i){
    console.log(i);
    i += 2;
}
  i++;
});


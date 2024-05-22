
// let number =42;
// console.log(typeof(number));

// let number ='42';
// console.log(typeof(number));

// let number =[];
// console.log(typeof(number));

// let number ='%^'
// console.log(typeof(number));

// console.log(typeof(null))

// console.log('hi'*3);

// console.log(1/0);


// //String

// let name ='nikhitha'

// console.log(`Hello ${name}!`);

// let name2='kanha'

// console.log(`${name2}`);

// console.log(`The result is ${1+2}`);

// let name ='nikhitha'

// console.log(`Hello ${1}`);

// console.log(`Hello ${"name"}`);

// console.log(`Hello ${name}`);


// console.log("6"/"2");

// let str ="123";

// console.log(typeof str);

// let num = Number(str);

// console.log(typeof num);


// let user={}

// user.name="nikhitha";
// user.age=22;
// user.email='@gmail.com';



// delete user.email;

// //console.log(user);

//onsole.log(user.name);

// let user2={};
// user2['name']='kanha';
// user2['age']=25;
// user2['quality']='god';

// console.log(user2['quality']);

// delete user2['age'];
// console.log(user2);


// let user3={
//   "favorite color":'green',
//   'friut':'mango',
//   'items':5
// }

// //console.log(user3['friut']);

// user3['friut']='grapes';

// //console.log(user3);


// console.log('age' in user3);
// console.log('friut' in user3);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum =salaries.John+salaries.Ann+salaries.Pete;
//   console.log(sum);


// let array =['Apple','Fruits','orange'];

// console.log(array[0]);

// array[2] ='grapes';

// console.log(array);



//let str='nikhitha'
// let str ='kanha';

// console.log(str);


// const str='nikhitha';
// str='kanha';

// console.log(str);


let array =['Apple'];

array.push('Orange','banana');

//console.log(array);
array.unshift('mango','grapes');

//console.log(array);


array.shift();

//console.log(array);

array.pop();

//console.log(array);

//console.log(typeof array);


// let res=[];

// for(let fruit of array){
//     res.push(fruit);
// }

//console.log(res);



// let car='audi';

// let bike ='himalayan';

// //console.info("My first bike is",bike,'my first car is',car);

// console.log('my first bike is',bike,'my first car is ',car);


// let x=1;

// if(x==1){
//     let x=2;
//     console.log(x);
// }

// console.log(x);


// var x=1;

// if(x==1){
//     var x=2;
//     console.log(x);

// }

// console.log(x);


// function foo(){
//     var x=1;

//     function bar(){
//         var y=2;
//         console.log(x);
//         console.log(y);
//     }
//     bar();
//     console.log(x);
//     console.log(y);
// }

// foo();


// function foo(){
//     const x=1;
//     function bar(){
//         const y=2;
//         console.log(x);
//         console.log(y);
//     }
//     bar();
//     console.log(x);
//     console.log(y);
// }

// foo();


// if(true){
//     var x=true;
// }

// //console.log(x);

// if(true){
//     let test =true;
// }

// console.log(test);


// for(var i=0;i<10;i++){
//     var one=1;
// }

// console.log(i);
// console.log(one);


// function Hello(){
//     if(true){
//         var res='hi'
//     }
//     console.log(res);
// }

// Hello();

// console.log(res);


// if(true){
//     let two='hello'
// }

// console.log(two);

// function sayHi(){
//     let value=4;
//     if(true){
//     let name='nikki';
//     console.log(name);
//     console.log(value);
//     }
   
//     console.log(value);
// }

// sayHi();

// console.log(x);
// var x=5;

// x=5;
// var x;
// console.log(x);


// console.log(test);
// var test='check';


// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);

// let arr=[1,2,3,4,5];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// let str='Hello';

// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }


// function Hello(){

//     let name=console.log("enter the name of javascript: ");

//     if(name==='ECMAScript'){
//         console.log('Right');
//     }
//     else{
//         console.log('No');
//     }
// }

// Hello();


// console.log(1 + 2 ** 3 * 4 / 5 >> 6);


// let sum=(a,b)=>{
//     return a+b;
// }


// console.log(sum(2,3));


// let double = n => n * 2;

const greeting = "Hello world";
(function () {
  console.log(greeting);
})();





  //    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
  
  //    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
  
  //    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
  
  //    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
  
  //    Implement a loop to access and print the ages of all individuals in the dataset.
  
  //    Create a function to retrieve and display the first hobby of each individual in the dataset.
  
  //    Write a function that accesses and prints the names and email addresses of individuals aged 25.
  
  //    Implement a loop to access and log the city and country of each individual in the dataset.



// function doOperation(x,opeartion){
//   return opeartion(x);
// }

// function double(x){
//   return x*2;
// }

// function square(x){
//   return x*x;
// }

// console.log(doOperation(5,double));

// console.log(doOperation(5,square));


// function performTask(callback){
// console.log("performing the task: ");
// callback();
// }

// function callbackFunction(){
//   console.log("callback function executed: ");
// }

// performTask(callbackFunction);

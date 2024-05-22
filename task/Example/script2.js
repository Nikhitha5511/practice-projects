
 /* Question no 6 & 7 output & hoisting */
// console.log(a);
// console.log(b);

// let a = 10;
// var b = 2;


/* Question no  8   just give fuction, task is print  required Output*/
// function func (){
//      function func2 (){
//      function func3 (){
//         console.log("Required Outpur");
//      }
//      func3();
//     }
//     func2();
// }


// func();  

// let input=[2,3];

// input[0]=input[0]+input[1];
// input[1]=input[0]-input[1];
// input[0]=input[0]-input[1];
 
// console.log(input);

// const data=[
//    {
//       name:"nikki",age:20},
//    {
//       name:"kanha" ,age:30
//    },
//    {
//       name:"viji",age:17
//    }
// ]

// const result = data.filter(item=>item.age>=18 && item.age<=30);
// console.log(result);



// const carouselItems = document.querySelectorAll('.carousel-item');
// let currentIndex = 0;

// function showSlide(index) {
//   // Hide all carousel items
//   carouselItems.forEach(item => {
//     item.style.display = 'none';
//   });

//   // Show the slide at the specified index
//   carouselItems[index].style.display = 'block';
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % carouselItems.length;
//   showSlide(currentIndex);
// }

// function previousSlide() {
//   currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//   showSlide(currentIndex);
// }

// // Show the first slide initially
// showSlide(currentIndex);

// // Set up event listeners for next and previous buttons
// document.getElementById('nextBtn').addEventListener('click', nextSlide);
// document.getElementById('prevBtn').addEventListener('click', previousSlide);


const stringsArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequencyCount = stringsArray.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
if(acc[curr]){
   acc[curr] +=1;
}
else{
   acc[curr]=1;
}
  return acc;
}, {});

console.log(frequencyCount);

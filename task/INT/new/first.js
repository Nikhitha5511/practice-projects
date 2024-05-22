let dataSet = [
    {
      name: "John",
      age: 25,
      hobbies: ["Reading", "Hiking", "Gaming"],
    },
    {
      name: "Alice",
      age: 30,
      hobbies: ["Painting", "Traveling", "Photography"],
    },
    {
      name: "Bob",
      age: 22,
      hobbies: ["Coding", "Swimming", "Cooking"],
    },
    {
      name: "Eva",
      age: 28,
      hobbies: ["Singing", "Dancing", "Cycling"],
    },
    {
      name: "David",
      age: 32,
      hobbies: ["Playing guitar", "Writing", "Skiing"],
    },
    {
      name: "Sophie",
      age: 27,
      hobbies: ["Yoga", "Reading", "Running"],
    },
    {
      name: "Mike",
      age: 35,
      hobbies: ["Fishing", "Gardening", "Camping"],
    },
    {
      name: "Emily",
      age: 26,
      hobbies: ["Photography", "Cooking", "Painting"],
    },
  ];

  // Return all the names in an array format


  const names=()=>{
    const res = dataSet.map(item=>item.name);
    return res;
  }

  //console.log(names());


 function data(){
    let res =[];
    for(let person of dataSet){
        res.push(person.name);
    }
    console.log(res);
 }

 //data();


 // check who has Cooking hobbie and return that person names in the array format

 const hobbies=()=>{
    const res = dataSet.filter(item=>item.hobbies.includes('Cooking'));
    const ans = res.map(item=>item.name);
    return ans;
 }

 //console.log(hobbies());

 const hobbie=()=>{
  const res = dataSet.reduce((acc,curr)=>{
    if(curr.hobbies.includes('Cooking')){
      acc.push(curr.name);
    }
    return acc;

  },[])
  return res;
 }


 console.log(hobbie());
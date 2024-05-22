// import axios from 'axios';
// import{useState,useEffect} from 'react';


// const First=()=>{
    
//     const[item,setItem]=useState([]);
//     const[text,setText]=useState('');


//     useEffect(()=>{
//      fetchData();

//     },[]);

//     const fetchData=async()=>{
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
//         const data = await response.data;
//         console.log(data);
//         setItem(data);
//     }

//     const handleChange=(e)=>{ 
//         setText(e.target.value); 
//     }

//     const filter=()=>{
//      const res=item.filter((data)=>{
//         return data.email.toLowerCase().includes(text)||data.username.toLowerCase().includes(text);

//      });
//      return res;
//     }
    

//     return(
//         <div>
//         <h1>Search</h1>
//         <input
//         type='text'
//         onChange={handleChange}
//         placeholder='enter text here....'
//         >
//         </input>
//         {filter().map((item,index)=>(
//             <div key={index}>
//             <p>{item.username}</p>
//             <p>{item.email}</p>
//             </div>
//         ))}

//         </div>
//     )
// }

// export default First;



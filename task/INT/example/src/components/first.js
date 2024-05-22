// import {useState} from 'react';

// const First=()=>{
//   const[category,setCategory]=useState('');
//   const[options,setOptions]=useState([]);
  
//   const handleCategory=(e)=>{
//    const select=e.target.value;
//    setCategory(select);
//    switch(select){
//     case 'vegetables':
//       setOptions(['tomato','onion','potato']);
//       break;
//     case 'fruits':
//       setOptions(['apple','mango','orage']);
//       break;
//     case 'dairy':
//       setOptions(['milk','yogurt','barfi']);
//       break;
//     default:
//       setOptions([]);
//       break;

//    }

//   }

//   return (
//    <div>
//    <select id='category' onChange={handleCategory} value={category}>
//     <option value=''>select</option>
//     <option value='vegetables'>vegetables</option>
//     <option value='fruits'>fruits</option>
//     <option value='dairy'>dairy</option>
//    </select>
//   <select  id='options' disabled={!category}>
//   <option value=''>select</option>
//   {options.map((option,index)=>(
//     <option key={index}>{option}</option>
//   ))}
//   </select>
 
//   </div>
//   );
// };

// export default First;




import{useState} from 'react';

const First=()=>{

  const[options,setOptions]=useState([]);
  const[category,setCategory]=useState('');

  const handleCategory=(e)=>{
   const select =e.target.value;
   setCategory(select);
   switch(select){
    case 'vegetables':
      setOptions(['tomato','onion','potato'])
    break;
    case 'fruits':
      setOptions(['apple','orange','grapes'])
    break;
    case 'dairy':
      setOptions(['milk','barfi','yogurt'])
      break;
    default:
      setOptions([])
    break;
   }
  }
return(
  <div>
  <select id='category' onChange={handleCategory}>
  <option value=''>select</option>
  <option value='vegetables'>vegetables</option>
  <option value='fruits'>fruits</option>
  <option value='dairy'>dairy</option>
  </select>
  <select id='options' disabled={!category}>
    <option value='select'>select</option>
    {options.map((item)=>(
      <option key={item.id}>{item}</option>
    ))}
  </select>
  </div>
)
}
export default First;

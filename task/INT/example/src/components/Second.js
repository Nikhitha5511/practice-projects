
// // import { useState ,useEffect} from "react";


// // const Second=({images})=>{
   
// //     const[startIndex,setIndex] =useState(0);

// //     useEffect(()=>{
// //         const interval=setInterval(()=>{
// //             setIndex((prevIndex)=>prevIndex+1 <images.length ? prevIndex+1:0)

// //         },3000);
// //         return()=>clearInterval(interval);
// //     },[])

// //     const prevSlide=()=>{
// //         setIndex((prevIndex)=> prevIndex-1>=0 ? prevIndex-1:images.length-1);
// //     }
// //     const nextSlide=()=>{
// //         setIndex((prevIndex)=>prevIndex+3 < images.length ? prevIndex+1:0);
// //     }
    

    

// //     return (
// //         <div className="carousel">
// //             <div className="carousel-items"> 
          
// //             {images.slice(startIndex,startIndex+3).map((image,index)=>(
// //                     <div key={index} className="carousel-item">
// //                         <img src={image} />
// //                     </div>
// //              ))}
// //             </div>
// //             <button onClick={prevSlide} className="prev-button">&#10094;</button>
// //             <button onClick={nextSlide} className="next-button">&#10095;</button>
// //         </div>
// //     );

// // }

// // export default Second;





// import {useState,useEffect} from 'react';

// const Second=({images})=>{

//     const[startIndex,setStartIndex]=useState(0);

//     useEffect(()=>{
//     const interval=setInterval(()=>{
//     setStartIndex(nextIndex=>nextIndex+1<images.length?nextIndex+1:0)
//     },3000);
//     return()=>clearInterval(interval);
//     },[]);

//     const prevSlide=()=>{
//     setStartIndex(prevIndex=>prevIndex-1>=0?prevIndex-1:0)
//     }

//     const nextSlide=()=>{
//         setStartIndex(nextIndex=>nextIndex+3<images.length?nextIndex+1:0)
//     }

//     return(
//         <div className='caurosel'>
//             <div className='caurosel-items'>
//                 {images.slice(startIndex,startIndex+3).map((image,index)=>(
//                  <div key={index} className='caurosel-item'>
//                 <img src={image}></img>
//                  </div>
//                 ))}
//             </div>
//             <button onClick={nextSlide} className='next-button'>&#10095;</button>
//             <button onClick={prevSlide} className='prev-button'>&#10094;</button>
//         </div>
//     )
// }

// export default Second;



import {useState} from 'react';

// const Second=()=>{
   
//     const[inputValue,setInputValue]=useState('');

//     const handleInput=(e)=>{
//         setInputValue(e.target.value);
//     }
    
//     return(
//         <div>
//         <input
//         type='text'
//         value={inputValue}
//         onChange={handleInput}
//         placeholder="enter text here..."
        
//         >
//        </input>
//        <p>{inputValue}</p>
//         </div>
//     )
// }

// export default Second;

import axios from 'axios';
import { useEffect } from 'react';
const Second=()=>{

    const[page,setPage]=useState(1);
    const[images,setImages]=useState([]);


    useEffect(()=>{
    fetchData();
    },[page])

    const fetchData=async()=>{
    const response = await axios.get(`https://some-random-api.com/animal/bird?page=${page}`)
    const data=await response.data;
    console.log(data);
    setImages(data);
    }

    const handlePrev=()=>{
        setPage(page-1);
    }

    const handleNext=()=>{
        setPage(page+1);
    }
    
    return(
        <div>
        {images &&(
            <div>
            <img src={images.image}></img>
            </div>
        )}
        <button onClick={handlePrev} disabled={page===1}>prevButton</button>
        <span>{page}</span>
        <button onClick={handleNext}>next</button>
        </div>
    )
}


export default Second;
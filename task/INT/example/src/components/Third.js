import {useState,useEffect} from 'react';
import axios from 'axios';
const Third=()=>{
    
    const[images,setImages]=useState([]);
    const[page,setPage]=useState(1);
    
    useEffect(()=>{
        const fetchImages=async()=>{
        const accessKey='bjlwDda3Em5DKL-F8KhFG_x_Qv4lmmc0kwj6XaJTnbs';
        const perPage=10;
        
        try{
            const response=await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per page=${perPage}`);
            const data=await response.data;
            console.log(data);
            setImages((prevImages)=>[...prevImages,...response.data]);
        }
        catch(error){
            console.error(error);
        }


        }
        fetchImages();

    },[page])

    const handleScroll=()=>{
        const isBottom=
        window.innerHeight+document.documentElement.scrollTop>=
        document.documentElement.offsetHeight-100;

        if(isBottom){
            setPage((prevPage)=>prevPage+1);
        }

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[]);


    return(

        <div>
            <h1 style={{textAlign:'center'}}>infiniteScrolling</h1>
        {images.map((item)=>(
            <div key={item.id} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={item.urls.regular} style={{width:'400px',height:'350px',margin:'10px'}}></img>
            

            </div>

        ))
        }
        </div>
    )
}

export default Third;

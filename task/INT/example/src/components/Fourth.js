
import{useState,useEffect} from 'react';
import axios from 'axios';

const Fourth=()=>{
 
    const[page,setPage]=useState(1);
    const[images,setImages]=useState([]);

    useEffect(()=>{
        const perPage=10;
        const fetchImages=async()=>{
        const accessKey='bjlwDda3Em5DKL-F8KhFG_x_Qv4lmmc0kwj6XaJTnbs';

        const response =await axios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`)
        const data= await response.data;
        console.log(data);

        setImages((prevImages)=>[...prevImages,...response.data]);
        }

        fetchImages();
    },[page])

    const handleScroll=()=>{
        const isBottom=
        window.innerHeight+document.documentElement.scrollTop>=
        document.documentElement.offsetHeight-100;

        if(isBottom){
            setPage(prevPage=>prevPage+1);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
    },[]);
    return(
        <div>
         {images.map((item)=>(
            <div key={item.id}>
          <img  src={item.urls.regular}></img>
          </div>

         ))}
        </div>
    )
}

export default Fourth;
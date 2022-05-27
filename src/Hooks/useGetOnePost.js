import { useEffect, useState } from 'react';

const useGetOnePost = (api) => {
    const [post,  setPost] = useState([]);

    useEffect( ()=>{
        fetch(api)
           .then(res =>res.json())
           .then(result => {setPost(result)
        }) 
        }
     ,[])

    return {post, setPost};
};

export default useGetOnePost;
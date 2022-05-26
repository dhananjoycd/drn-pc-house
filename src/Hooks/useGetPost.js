import { useEffect, useState } from 'react';

const useGetPost = (api) => {

    const [latestPost,  setPosts] = useState([]);

    const posts = [];
    latestPost.map(post => posts.unshift(post));


    useEffect( ()=>{
        fetch(api)
           .then(res =>res.json())
           .then(result => setPosts(result)) 
        }
     ,[])
    return {posts, setPosts};
};

export default useGetPost;
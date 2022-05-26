import { useState } from "react";

const useDeletePost = () => {
    const [latestPosts,  setPosts] = useState([]);

    const posts = [];
    latestPosts.map(post => posts.unshift(post));

    const deleteApi = (api, id, Admin) =>{
  
        if(Admin==='Admin'){
         const doSure = window.confirm('Do you want to delete this?');
         if(doSure){
        
           fetch(api, {
               method: "DELETE"
           })
           .then(res => res.json())
           .then(data => {
             const remainingPosts = latestPosts.filter(post =>post._id !== id )
             setPosts(remainingPosts);
             alert(`Yeah! It has been deleted, Please ReFresh the page`)
             window.location.reload();
           })
    
       }
        }
    
        else{
          alert(`You may click mistakenly but it does not exist with You`)
        }
    };


    return {deleteApi};

};

export default useDeletePost;
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const useDeletePost = () => {
  const [user] = useAuthState(auth);
    const [latestPosts,  setPosts] = useState([]);

    const posts = [];
    latestPosts.map(post => posts.unshift(post));

    const deleteApi = (api, id, Admin, pUid) =>{
  
        if(Admin==='Admin' || user?.uid===pUid){
         const doSure = window.confirm('Do you want to delete this?');
         if(doSure){
        
           fetch(api, {
               method: "DELETE"
           })
           .then(res => res.json())
           .then(data => {
             const remainingPosts = latestPosts.filter(post =>post._id !== id )
             setPosts(remainingPosts);
             toast.success(`Yeah! It has been deleted, Please ReFresh the page`)
             window.location.reload();
           })
    
       }
        }
    
        else{
          toast.warning(`You may click mistakenly but it does not exist with You`)
        }
    };


    return {deleteApi};

};

export default useDeletePost;
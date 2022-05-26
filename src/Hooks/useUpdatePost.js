import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const useUpdatePost = () => {
    const [user] = useAuthState(auth);

    const updateApi = (api, data, pUid) =>{
       
    if(user?.uid===pUid){
      fetch(api, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
      console.log('data pabo',result);
      toast.success(`Hey! ${user?.displayName}, Your product update was successfully done`);
      window.location.reload();
     
      })
    }

    else{
      toast.warning(`Hey! ${user?.displayName}, You may click mistakenly but it does not exist in your any products`)
    }
     
     }
    return {updateApi};
};

export default useUpdatePost;
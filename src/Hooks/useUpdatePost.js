import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const useUpdatePost = () => {
    const [user] = useAuthState(auth);
    let updateDone;

    const updateApi = (api, data, admin, pUid) =>{
      console.log(data);
    if(admin==='Admin' || user?.uid===pUid){
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
      updateDone = true;
      toast.success(`Hey! ${user?.displayName}, Your update was successfully done`);
      window.location.reload();
     
      })
    }

    else{
        updateDone = false;
      toast.warning(`Hey! ${user?.displayName}, You may click mistakenly but it does not exist with You`)
    }
     
     }
    return {updateApi, updateDone};
};

export default useUpdatePost;
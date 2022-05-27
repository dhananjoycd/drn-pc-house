import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useDeletePost from './useDeletePost';
import useGetPost from './useGetPost';
import useUpdatePost from './useUpdatePost';

const useMongoDB = () => {
    const [user] = useAuthState(auth);
    const {updateApi} = useUpdatePost();
    const {deleteApi} = useDeletePost();
    //get correct post
let userUrl = 'http://localhost:5000/users'
var {posts} = useGetPost(userUrl);
let dbUsers = posts;
 const dbUser = posts.find(p => {
    if(p?.uid === user?.uid  ){
        return p;
    }
})
var role = dbUser?.role;
var uid = dbUser?.uid;

var {posts} = useGetPost('http://localhost:5000/pcparts');
 const pcParts = posts;

var {posts} = useGetPost('http://localhost:5000/orders');
 const orders = posts;

//update correct API

const updateUser=(id, data)=>{
    updateApi(`http://localhost:5000/users/${id}`, data, role );
}

const updatePcParts=(id, data)=>{
    updateApi(`http://localhost:5000/pcparts/${id}`, data, role, uid);
}


//delete Correct API
const deletePcPart =(id) =>{
    deleteApi(`http://localhost:5000/pcparts/${id}` , id, role);
}
const deleteUser =(id) =>{
    deleteApi(`http://localhost:5000/users/${id}`, id, role )
}

    return {dbUser, dbUsers,pcParts,orders, updatePcParts,updateUser, deleteUser, deletePcPart};
};

export default useMongoDB;
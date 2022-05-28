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
let userUrl = 'https://whispering-refuge-62530.herokuapp.com/users'
var {posts} = useGetPost(userUrl);
let dbUsers = posts;
 const dbUser = posts.find(p => {
    if(p?.uid === user?.uid  ){
        return p;
    }
})
var role = dbUser?.role;

var {posts} = useGetPost('https://whispering-refuge-62530.herokuapp.com/pcparts');
 const pcParts = posts;

var {posts} = useGetPost('https://whispering-refuge-62530.herokuapp.com/reviews');
 const reviews = posts;

 const myReviews = [];
 reviews.map( o =>{
     if(user?.uid === o.uid ){
        myReviews.push(o);

     }
 })

var {posts} = useGetPost('https://whispering-refuge-62530.herokuapp.com/orders');
 const orders = posts;

 const myOrders = [];
 orders.map( o =>{
     if(user?.uid === o.uid ){
    myOrders.push(o);

     }
 })


//update correct API

const updateUser=(id, data,uid)=>{
    updateApi(`https://whispering-refuge-62530.herokuapp.com/users/${id}`, data, role,uid);
}

const updatePcParts=(id, data)=>{
    updateApi(`https://whispering-refuge-62530.herokuapp.com/pcparts/${id}`, data, role, dbUser?.uid);
}
const updateOrder=(id, data,uid)=>{
    updateApi(`https://whispering-refuge-62530.herokuapp.com/orders/${id}`, data, role, uid);
}


//delete Correct API
const deletePcPart =(id,uid) =>{
    deleteApi(`https://whispering-refuge-62530.herokuapp.com/pcparts/${id}` , id, role, uid);
}
const deleteUser =(id, uid) =>{
    deleteApi(`https://whispering-refuge-62530.herokuapp.com/users/${id}`, id, role, uid )
}
const deleteOrder =(id,uid) =>{
    deleteApi(`https://whispering-refuge-62530.herokuapp.com/orders/${id}`, id, role,uid )
}

    return {dbUser, dbUsers,pcParts,orders,myOrders,reviews,myReviews, updatePcParts,updateUser, updateOrder, deleteUser, deletePcPart, deleteOrder};
};

export default useMongoDB;
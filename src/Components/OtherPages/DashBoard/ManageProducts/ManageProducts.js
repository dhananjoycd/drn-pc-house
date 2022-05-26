import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useDeletePost from '../../../../Hooks/useDeletePost';
import useGetPost from '../../../../Hooks/useGetPost';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const {posts} = useGetPost('http://localhost:5000/pcparts');
    const {deleteApi} = useDeletePost();

    return (
        <div className='container-fluid'>
<h3 className='my-3 text-center font-title bg-success mx-2 rounded py-2 text-dark'>Hey! <span className='ff text-white'> {user?.displayName}</span> , You have <span className='ff text-danger bg-white px-2 rounded-pill'>{posts?.length}</span> products </h3>

{/* <div>
{loading}
</div> */}


            <div className="row row-cols-1 row-cols-md-2  row-cols-xl-3 g-4">
{
    posts?.map(post => <div className='col'>
    <div className='card h-100 p-1 mx-2'>

    <div className="row row-cols-2 g-4">
<div className='col'>
<img src={post?.productIMG} className="card-img-top" alt="Product Photo"/>
</div>
<div className='col'>
<div className='row row-cols-1 g-4'>
<div className='col'>
<h5 className='font-title'>  {post?.productName?.slice(0,60)}</h5>
</div>
<div className='col'>


<h5 className='mb-4'>Price: <span className='ff bg-primary text-white price  rounded-pill'>{post?.productPrice} TK </span>   </h5>
<h5 className='mt-3'>
Quantity: <span className='ff bg-warning text-danger fw-bold px-3 py-1 rounded-pill'>  {post?.productQuantity}</span></h5>


</div>

</div>

</div>

    </div>


<div className='card-body'>
</div>
<div className="bg-banner rounded p-1 d-flex justify-content-around">
      <Button as={Link} to={post?._id} className='btn btn-success'>Manage</Button>

      <button onClick={()=> deleteApi(`http://localhost:5000/pcparts/${post?._id}`, post?._id, 'Admin')} className="btn btn-danger">Delete</button>


</div>

    </div>
  </div>
    
    )
}
  
</div>
        </div>
    );
};

export default ManageProducts;
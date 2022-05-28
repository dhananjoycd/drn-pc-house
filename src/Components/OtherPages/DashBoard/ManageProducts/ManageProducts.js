import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../../Hooks/Loading';
import useMongoDB from '../../../../Hooks/useMongoDB';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const {pcParts, deletePcPart} = useMongoDB();
    const posts = pcParts;

    if(pcParts.length==0){
        return  <h6 className='text-center'> <span className='text-danger fs-3'>Manage Field was Empty</span><Loading></Loading></h6>
    }
    
    if(!pcParts.length){
        return <Loading></Loading>
    }


    return (
        <div className='container-lg'>
<h3 className='my-3 text-center font-title bg-success mx-2 rounded py-2 text-dark'>Hey! <span className='ff text-white'> {user?.displayName.split(' ')?.[0]}</span> , You have <span className='ff text-danger bg-white px-2 rounded-pill'>{posts?.length}</span> products </h3>

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


<h6 className='mb-4'>Price: <span className='ff bg-primary text-white price  rounded-pill px-2'>{post?.productPrice} TK </span>   </h6>
<h6 className='mt-3'>
Quantity: <span className='ff bg-warning text-danger fw-bold px-3 py-1 rounded-pill'>  {post?.productQuantity}</span></h6>


</div>

</div>

</div>

    </div>


<div className='card-body'>
</div>
<div className="bg-banner rounded p-1 d-flex justify-content-around">
      <Button as={Link} to={post._id} className='btn btn-success'>Manage</Button>

      <button onClick={()=> deletePcPart( post?._id)} className="btn btn-danger">Delete</button>


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
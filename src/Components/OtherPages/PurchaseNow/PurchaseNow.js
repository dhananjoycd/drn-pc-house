import React from 'react';
import { useParams } from 'react-router-dom';
import useGetOnePost from '../../../Hooks/useGetOnePost';
import OrderForm from '../OrderForm/OrderForm';

const PurchaseNow = () => {
    const {partID} = useParams();




    const {post} = useGetOnePost(`http://localhost:5000/pcparts/${partID}`);

    const {_id, lowestQuantity, highestQuantity, productQuantity, productType, productName, productIMG, productPrice, productBody} = post;


    return (
        <div className='container-lg my-3'>
             <div className="d-flex justify-content-center my-3 ">
             <h4 className='text-center title'>Your Selected product to Purchase</h4>
             </div>
  
        <div className='row'>
    <div className='col'>
      <div className='card h-banner h-100 p-1 mx-2'>
<div className='d-flex justify-content-center'>
<img src=  { productIMG} className="card-img-top" alt="Product Photo"/>
</div>

<div className='card-body'>
<div className='row row-cols-1 row-cols-md-2 g-4'>
 <div className='col'>
<h5 className='font-title'>  { productName} </h5> 
  </div>
  <div className='col d-flex justify-content-around'>

<h5 >Price: <span className='ff bg-primary text-white fw-bold px-3 py-1 rounded-pill'>{ productPrice} TK </span>   </h5>
<h5 >
Quantity: <span className='ff bg-warning text-danger fw-bold px-3 py-1 rounded-pill'>  {productQuantity}</span></h5>

  </div>
  
 </div>
 <h5 className='text-center mt-4 font-title'>Condtion: <span className='bg-danger px-3 py-2 rounded-pill text-white'>Sold</span></h5> 
 
 <div className=' mt-4'>
   <h3 className='text-center text-primary font-title '>Product Description  <hr /></h3>
   <p className='bg-light p-2 rounded font-body'>  { productBody} <br /></p> 
   <h5 className='text-center mt-4 text-danger'>  Brand: <span className='title px-3'> {productType} </span> </h5> 
   <h6 className='text-muted font-title text-center'>Product Quantity Range{' (For valid Order) '}: Lowest<small className='text-danger ff'> {lowestQuantity}</small> - Maximum <small className='text-danger ff'> {highestQuantity}</small>
   </h6>
 </div>
<hr />

</div>
<OrderForm key={_id} post={post}></OrderForm>
</div>
    </div>
    </div>

 
        </div>
    );
};

export default PurchaseNow;
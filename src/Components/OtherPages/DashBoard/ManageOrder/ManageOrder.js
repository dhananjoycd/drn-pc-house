import React from 'react';
import { Button } from 'react-bootstrap';
import Loading from '../../../../Hooks/Loading';
import useMongoDB from '../../../../Hooks/useMongoDB';

const ManageOrder = () => {
    const {orders} = useMongoDB();

    if(orders.length==0){
        return  <h6 className='text-center'> <span className='text-danger fs-3'>Orders Field was Empty</span><Loading></Loading></h6>
    }
    
    if(!orders.length){
        return <Loading></Loading>
    }
    return (
        <div>
        <div className="table-responsive-md">
        <div className="d-flex justify-content-center my-3">
                <h3 className='text-center title px-2'>We Have <span className='text-warning'>{orders?.length}</span>  users with Admin </h3>
                </div>
        <table className="table text-center table-striped">
        <thead>
        <tr className='text-center border'>
          <th scope="col">SN.</th>
          <th scope="col">Buyer Name</th>
          <th scope="col">Order Key</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Payment</th>
          <th className='bg-warning' scope="col"  colspan="2">Admin Action</th>
        </tr>
      </thead>
      <tbody className='bg-light border'>
     
      {
          orders.map((order, index) => <tr>
            <th scope="row">{index+1}</th>
            <td>{order?.displayName.split(' ')?.[0]}</td>
            <td>{order?.orderNo}</td>
            <td>{order?.productName.slice(0,16)}</td>
            <td>{order?.quantity}</td>
            <td>{order?.productPrice}</td>
            <td>{order?.payment}</td>
            <td> {
                (order?.payment ==='paid') ? <Button variant="success" className='fw-bold b-title' size="sm" disabled>
              Already Taken
            </Button>:
            <Button onClick={()=>{
                const data ={payment: 'paid'}
                // updateUser(dbUser._id, data)
            
            }} variant="success" className='fw-bold b-title' size="sm">
       Order Confirm
        </Button>
                }</td>
    
    
            <td> <Button onClick={()=>{
                // deleteUser(dbUser._id)
        
            }} variant="danger" className='fw-bold b-title' size="sm">
        Cancel Order
        </Button></td>
          </tr>)
      }
    
      </tbody>
    
        </table>
        </div>
            </div>
    );
};

export default ManageOrder;
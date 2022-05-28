import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../../Hooks/Loading';
import useMongoDB from '../../../../Hooks/useMongoDB';

const MyOrder = () => {
  const navigate = useNavigate();
    const {myOrders, updateOrder, deleteOrder} = useMongoDB();
 
    if(myOrders.length==0){
        return  <h6 className='text-center'> <span className='text-danger fs-3'>Orders Field was Empty</span><Loading></Loading></h6>
    }
 
    return (
        <div>
        <div className="table-responsive-md">
        <div className="d-flex justify-content-center my-3">

        {(myOrders?.length==0)? 
                <h3 className='text-center title px-2'> No order Aviable</h3>:
                <h3 className='text-center title px-2'>You Have <span className='text-warning'>{myOrders?.length}</span> {(myOrders?.length>1)? 'orders Aviable':'order Aviable'}  </h3>}

                </div>
        <table className="table  text-center table-striped">
        <thead>
        <tr className='text-center border'>
          <th scope="col">SN.</th>
          <th scope="col">Buyer Name</th>
          <th scope="col">Order Key</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Payment</th>
          <th className='bg-warning' scope="col"  colSpan="2">User Action</th>
        </tr>
      </thead>
      <tbody className='bg-light border'>
     
      {
          myOrders.map((order, index) => <tr>
            <th scope="row">{index+1}</th>
            <td>{order?.displayName.split(' ')?.[0]}</td>
            <td>{order?.orderNo}</td>
            <td>{order?.productName.slice(0,16)}</td>
            <td>{order?.quantity}</td>
            <td>{order?.productPrice}</td>
            <td><span className='bg-info rounded-pill px-3 py-1 fw-bold'>{order?.payment.toUpperCase()}</span> </td>
            <td> {
                (order?.payment ==='pending' || order?.payment ==='paid') ? <Button variant="success" className='fw-bold b-title' size="sm" disabled>
              Already Paid
            </Button>:
            <Button onClick={()=>{
              const data = { payment: 'pending'}
              updateOrder(order._id, data, order.uid )
              // navigate(`payPayment/${order._id}`);
            }} variant="success" className='fw-bold b-title' size="sm">
     Pay Payment
        </Button>
                }</td>

        <td> 

        { (order?.payment ==='pending' || order?.payment ==='paid')? <>
        {
        (order?.payment ==='paid')&& <Button onClick={()=>{
        // see shipping date -- niya kaj hobe

        }} variant="primary" className='fw-bold b-title' size="sm" disabled>
        Order Confirmed
        </Button>
        }

        {
        (order?.payment ==='pending')&& <Button onClick={()=>{
        //order prccesing niya kah dekhano

        }} variant="danger" className='fw-bold b-title' size="sm" disabled >
        Order Proccesing
        </Button>
        }

        </>:
        <Button onClick={()=>{
          deleteOrder(order._id, order.uid);

        }} variant="danger" className='fw-bold b-title' size="sm">
        Cancel Order
        </Button>
        }</td>
    
          </tr>)
      }
   
      </tbody>
    
        </table>
        </div>
            </div>
    );
};
export default MyOrder;
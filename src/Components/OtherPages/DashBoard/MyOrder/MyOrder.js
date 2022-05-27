import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../../Hooks/Loading';
import useMongoDB from '../../../../Hooks/useMongoDB';

const MyOrder = () => {
    const {orders} = useMongoDB();
    const [user] = useAuthState(auth);

    const myOrders = [];
    orders.map( o =>{
        if(user?.uid === o.uid ){
       myOrders.push(o);
  
        }
    })

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
          <th className='bg-warning' scope="col"  colspan="2">User Action</th>
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
            <td>{order?.payment}</td>
            <td> {
                (order?.payment ==='pending' || order?.payment ==='paid') ? <Button variant="success" className='fw-bold b-title' size="sm" disabled>
              Already Paid
            </Button>:
            <Button onClick={()=>{
                const data ={payment: 'pending'}
                // updateUser(dbUser._id, data)
            
            }} variant="success" className='fw-bold b-title' size="sm">
     Pay Payment
        </Button>
                }</td>

            <td> {
                (order?.payment ==='paid') ?  <Button onClick={()=>{
                    // deleteUser(dbUser._id)
            
                }} variant="primary" className='fw-bold b-title' size="sm" disabled>
            Order Confirmed
            </Button>:
            <Button onClick={()=>{
                // deleteUser(dbUser._id)
        
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
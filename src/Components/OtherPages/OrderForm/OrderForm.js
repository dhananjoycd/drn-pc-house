import React from 'react';
import useMongoDB from '../../../Hooks/useMongoDB';
import { useForm } from "react-hook-form";
import Loading from '../../../Hooks/Loading';
import { toast } from 'react-toastify';
import useCreatePost from '../../../Hooks/useCreatePost';


const OrderForm = ({post}) => {
    const {dbUser,updatePcParts} = useMongoDB();
    const {createApi} = useCreatePost();
  let {_id, lowestQuantity, highestQuantity, productQuantity, productPrice, productName, productType} = post;
    const { register, handleSubmit, formState: { errors } } = useForm();


    if(!dbUser){

        return<> <span className='text-danger text-center fs-3'>User Not Found</span><Loading></Loading></>
    }

    const displayName = dbUser?.displayName;
    const uid= dbUser?.uid;
    const email = dbUser?.email ;
    const phoneNumber = dbUser?.phoneNumber ;

  //get digit
  lowestQuantity= parseInt(lowestQuantity);
  highestQuantity = parseInt(highestQuantity);
  productQuantity = parseInt(productQuantity);
  const onSubmit = data =>{
    const quantity = parseInt(data.userQuantity);
    const shipingAddress = (data.address);
    const orderNo = Math.floor(100000 + Math.random() * 900000);

    if(lowestQuantity <=quantity && quantity<=highestQuantity){
        productQuantity = productQuantity-quantity;
       
  const orderData = {
  pid:_id, uid, orderNo, productName, quantity, productPrice, displayName, email, phoneNumber, shipingAddress ,productType, payment: 'unpaid'
};

if(productQuantity>0){
    updatePcParts(_id, {productQuantity})
createApi('http://localhost:5000/orders', orderData);
toast.success('taken order');
}

else{
    toast.warning('over');   
}

    }

else{
    toast.warning('need');
}
  
  };
  
//   console.log(errors);

    return (
        <div>
 <form onSubmit={handleSubmit(onSubmit)}>
 {/* // const {uid, displayName, email, phoneNumber } = dbUser; */}


 <div className='mt-2 text-center'>
 <label>Your Name</label> <br />

 <fieldset disabled>
      <input type="text" value={`${displayName}`} {...register("displayName")} />
      </fieldset>
 </div>

 <div className='mt-2 text-center'>
 <label>Your Email</label> <br />
      <input type="email" value={email} readOnly {...register("email")} />
 </div>

 <div className='mt-2 text-center'>
 <label>Your Phone</label> <br />
      <input type="tel" checked value={phoneNumber} readOnly  {...register("phoneNumber")} />
 </div>

 <div className='mt-2 text-center'>
 <label>Product Quantity</label> <br />
 <input type="number" placeholder="Type Quantity" {...register("userQuantity", {required: true})} />
 </div>

 <div className='mt-2 text-center'>
 <label> Shiping Adress</label> <br />
 <textarea className='w-50' type="text" placeholder="address" {...register("address", {required: true})} />
 </div>


      <div className='bg-banner py-2 text-center rounded my-3'>
<button  type="submit"  className="btn btn-info fw-bold font-title">Confirm Order</button>
</div> 
    </form>



</div>
    );
};

export default OrderForm;
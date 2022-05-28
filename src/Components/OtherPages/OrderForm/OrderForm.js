import React from 'react';
import useMongoDB from '../../../Hooks/useMongoDB';
import { useForm } from "react-hook-form";
import Loading from '../../../Hooks/Loading';
import { toast } from 'react-toastify';
import useCreatePost from '../../../Hooks/useCreatePost';
import { useNavigate } from 'react-router-dom';


const OrderForm = ({post}) => {
    const navigate = useNavigate();
    const {dbUser, updatePcParts} = useMongoDB();
    const {createApi} = useCreatePost();
  let {_id, lowestQuantity, highestQuantity, productQuantity, productPrice, productName, productType} = post;
    const { register, handleSubmit, formState: { errors } } = useForm();


    if(!dbUser){
        return<> <span className='text-danger text-center fs-3'>User Not Found</span> <Loading></Loading> <span className='text-warning bg-dark rounded font-title text-center fs-2'> Please Update your Profile to take Order</span></>
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
  pid:_id, uid, orderNo, productName, productQuantity, quantity, productPrice, displayName, email, phoneNumber, shipingAddress ,productType, payment: 'unpaid'
};

if(productQuantity>0){
    updatePcParts(_id, {productQuantity});
createApi('https://whispering-refuge-62530.herokuapp.com/orders', orderData);
toast.success('Taken Order Succefully done');
navigate('/dashboard/myorders')
}

else{
    toast.warning(`Your Quantity ${quantity} is less than Zero`);   
}

    }

else{
    toast.warning(`Your Quantity ${quantity} doesn't exist our quantity ranage ${lowestQuantity} - ${highestQuantity}`);
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
      <input type="tel" placeholder="Type phone number" {...register("phoneNumber")} />
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
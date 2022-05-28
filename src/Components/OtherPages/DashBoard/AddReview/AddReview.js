import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../../../Hooks/Loading';
import useCreatePost from '../../../../Hooks/useCreatePost';
import useMongoDB from '../../../../Hooks/useMongoDB';

const AddReview = () => {
    const {dbUser,myOrders,myReviews} = useMongoDB();
    const {createApi} = useCreatePost();
    const { register, handleSubmit, formState: { errors } } = useForm();
   let takeOrder = false;
    if(!dbUser){
        return<> <span className='text-danger text-center fs-3'>User Not Found</span> <Loading></Loading> <span className='text-warning bg-dark rounded font-title text-center fs-2'> Please Update your Profile to take Order</span></>
    }

    if(myOrders){
       takeOrder = myOrders.find(order=> {
            if(order?.payment ==='paid') {
               return true;
            }
            else{
                return false;
            }
    } );
     }

     console.log(takeOrder);

    const displayName = dbUser?.displayName;
    const uid= dbUser?.uid;
    const email = dbUser?.email ;
    const phoneNumber = dbUser?.phoneNumber ;
    const photoURL = dbUser?.photoURL ;



    const onSubmit = data =>{
        const reviewText = (data.reviewText);
        const review =parseFloat( (data.review));


        const reviewData = {
            uid,photoURL, displayName, email, phoneNumber,review, reviewText 
          };
if(takeOrder){
    if(review>=1 && review<=5){
        createApi('https://whispering-refuge-62530.herokuapp.com/reviews', reviewData);
    toast.success(`Your Review ${review} is taken successfully done`);
    }
    else{
        toast.warning(`Your Review ${review} is Invaild. Enter any digit from 1 to 5`);
    }
}

    };

    return (
        <div>
            <span className='d-flex justify-content-center'> 
            <h5 className='title text-center'>Give Us Your Review</h5>
            </span>
<Card className='p-2 bg-light'>
    {takeOrder? <p className='text-success text-center font-title fs-5'>{myReviews?.length>0 ? <span className='text-warning bg-dark px-3 py-1 rounded'>Already You have added {myReviews?.length>1 ? `${myReviews?.length} reviews`:`${myReviews.length} review`}</span>:<span className='text-warning bg-dark px-3 py-1 rounded'> Ohoo! You have no review</span>} <br /> Yay! You can add Review.<hr /></p> : <p className='text-danger text-center font-title fs-5'> Please Wait for product delivery. After Confirming  your Order, You will be able to give us review <hr /></p>

    }
<form onSubmit={handleSubmit(onSubmit)}>
 <div className='mt-2 text-center'>
 <label>Your Name</label> <br />
 <fieldset disabled>
      <input type="text" value={`${displayName}`} {...register("displayName")} />
      </fieldset>
 </div>

 <div className='mt-2 text-center'>
 <label>Your Email</label> <br />
 <fieldset disabled>
      <input type="email" value={email} {...register("email")} />
      </fieldset>
 </div>

 <div className='mt-2 text-center'>
 <label>Evaluate Experience (Review) </label> <br />
 <input type="text" placeholder="Type review Quantity" {...register("review", {required: true})} />
 <p className='text-danger ff font-title fs-6'>Your review range should be under one to five</p>
 </div>

 <div className='mt-2 text-center'>
 <label> Review Description</label> <br />
 <textarea className='w-50' type="text" placeholder="review Text" {...register("reviewText", {required: true})} />
 </div>


   {takeOrder?    <div className='bg-banner py-2 text-center rounded my-3'>
<button  type="submit"  className="btn btn-warning fw-bold font-title">Submit</button>
</div>:    <div className='bg-banner py-2 text-center rounded my-3'>
<button  type="submit"  className="btn btn-warning fw-bold font-title" disabled>Submit</button>
</div> 

   }
    </form>
</Card>
        </div>
    );
};

export default AddReview;
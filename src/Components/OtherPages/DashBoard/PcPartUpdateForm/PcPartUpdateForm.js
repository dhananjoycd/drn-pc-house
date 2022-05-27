import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useMongoDB from '../../../../Hooks/useMongoDB';


const PcPartUpdateForm = ({post}) => {
    const {updatePcParts} = useMongoDB();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let {_id, productQuantity} = post;


    const onSubmit = data =>{
        const quantity = parseInt(data.addQuantity);
        const lowestQuantity = parseInt(data.lowestQuantity);
        const highestQuantity = parseInt(data.highestQuantity);
        const productPrice = parseInt(data.productPrice);
      
      
      
      
        if(quantity>0){
        productQuantity= productQuantity+quantity;
        const data = {
            productQuantity,lowestQuantity,highestQuantity,productPrice
        }

        if(productQuantity>0){
            updatePcParts(_id, data)
        toast.info('Taking Action To Update PC Part');
        }
      }
      else{
        toast.warning(`Your Quantity ${quantity} is less than Zero`);   
    }
    }


    return (
        <div>
            <h3 className='b-title text-center text-white'>You can Update Any Field from Below</h3>
           <form onSubmit={handleSubmit(onSubmit)}>

 <div className='mt-3 text-center'>
 <label className='font-title'>Set lowest Quantity</label> <br />
 <input className='text-center fw-bold' type="number" placeholder="Type lowest Quantity" {...register("lowestQuantity")} />
 </div>

 <div className='mt-3 text-center'>
 <label className='font-title'>Set highest Quantity</label> <br />
 <input className='text-center fw-bold' type="number" placeholder="Type highest Quantity" {...register("highestQuantity")} />
 </div>

 <div className='mt-3 text-center'>
 <label className='font-title'>Set product Price</label> <br />
 <input className='text-center fw-bold' type="number" placeholder="Type product Price" {...register("productPrice")} />
 </div>

 <div className='mt-3 text-center'>
 <label className='font-title'>Add Product Quantity</label> <br />
 <input className='text-center fw-bold' type="number" placeholder="Add Quantity" {...register("addQuantity")} required/>
 </div>



      <div className='bg-banner py-2 text-center rounded my-3'>
<button  type="submit"  className="btn btn-warning fw-bold font-title">Update Product</button>
</div> 
    </form>
        </div>
    );
};

export default PcPartUpdateForm;
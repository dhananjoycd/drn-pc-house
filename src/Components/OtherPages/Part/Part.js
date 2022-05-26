import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Part = (props) => {
    const {_id, uid, displayName, email, phoneNumber, lowestQuantity, highestQuantity, totalQuantity, productType, productName, productIMG, productPrice, productBody} = props?.post;
    const [user] = useAuthState(auth);

    return (
        <div className="col font-f">
        <div className="card cardIMG h-100">
          <img src={productIMG} className="card-img-top" alt="Product Photo"/>
          <div className="card-body">
            <h5 className="card-title font-title fs-4">{productName?.slice(0,60)}</h5>
           <div className='d-flex justify-content-around rounded p-1'>
           <h5 className="card-title bg-warning p-1 rounded me-auto">Price: <span className='ff text-danger'> {productPrice}</span> TK</h5>
            <h5 className="card-title bg-primary text-white p-1 rounded ms-auto">Quantity: <span className='ff text-warning'>{totalQuantity}</span></h5>
           </div>
           <div className='bg-light p-3 rounded'>
           <h3 className='font-title text-center text-primary'>Product Details <hr /></h3> 
           <p className="card-text font-body">{productBody?.slice(0,180)}
           </p>
           </div>
           <h6 className='mt-3'>Product Type: <span className='bg-danger text-white rounded-pill px-2 py-1'>{productType}</span> </h6>
            <hr /><h5 className="card-title mt-3"> Added by: <span className='small-img'> </span>
            <span className='ff'>{
                user?.uid === uid? 'You':`${displayName}`
            }
                </span></h5>
          </div>

          <div className="bg-banner p-2">

          <div className="d-flex justify-content-center">

              {/* ami a tag ta nijer ecca kore use koreci instead of button for refresh the mange page */}
              <a  className='common-link font-btn font-title px-3 bg-warning fw-bold' href={`/myproducts/${_id}`} title="It's your product" >Update Your Stock</a>
              </div>

          </div>
        </div>
      </div> 
    );
};

export default Part;
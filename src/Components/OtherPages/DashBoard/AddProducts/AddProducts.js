import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useCreatePost from '../../../../Hooks/useCreatePost';
import Loading from '../../../../Hooks/Loading';


const AddProducts = () => {
    const {createApi} = useCreatePost()
    //information from firebase user
    const [user] = useAuthState(auth);


    const uid = user?.uid;
    const displayName = user?.displayName;
    const email = user?.email;
    //for store input value
    const [phoneNumber , setPhoneNumber] = useState('');
    const [productName , setProductName] = useState('');
    const [ productIMG, setProductIMG] = useState('');
    const [ productPrice, setProductPrice] = useState('');
    const [ productQuantity, setproductQuantity] = useState('');
    const [ lowestQuantity, setLowestQuantity] = useState('');
    const [ highestQuantity, setHighestQuantity] = useState('');
    const [ productBody, setProductBody] = useState('');
    const [productType, setproductType] =useState('Uncategories');
    const [option, setOption] = useState(true);
    //data make for server
    


    const data ={uid, displayName, email, phoneNumber, lowestQuantity, highestQuantity, productQuantity, productType, productName, productIMG, productPrice, productBody};

    if(!user){
        return <Loading></Loading>
    };

    //for product create
    const handleAddProduct =(e)=>{
        e.preventDefault();
        createApi('http://localhost:5000/pcparts',data );

    }



    return (
<div>
<div className='container bg-white shadow p-2 my-3 rounded text-center font-title' >

<div>
    <h3>Hello <span className='text-danger'>{user?.displayName},</span> <small>You can Add your Product by fill the below form</small> </h3>

<div className='d-flex justify-content-center my-2'>

    <form  onSubmit={handleAddProduct}>

        <div className="my-3">
        <label htmlFor="displayName">Supplier Name</label><br />
        <input type="text" name="displayName" value={user?.displayName || 'New User'} disabled required/>
        </div>

        <div className="my-3">
        <label htmlFor="email"> Supplier Email</label><br />
        <input type="text" name="email" value={user?.email} disabled required/>
        </div>

        <div className="my-3">
        <label htmlFor="phoneNumber"> Supplier Phone Number</label><br />
        <input onChange={(e)=>setPhoneNumber(e.target.value)} type="number" name="phoneNumber" required/>
        </div>
        
        <div>
        <label htmlFor="productName">Product Name</label> <br />
        <input onChange={(e)=>setProductName(e.target.value)} type="text" name="productName" required/>
        </div>

        <div className="my-3">
        <label htmlFor="productIMG">Product Photo URL </label><br />
        <input onChange={(e)=>setProductIMG(e.target.value)} type="text" name="productIMG" required/>
        </div>

        <div className="my-3">
        <label htmlFor="productPrice">Per Product Price</label><br />
        <input onChange={(e)=>setProductPrice(e.target.value)} type="number" name="productPrice" required/>
        </div>

        <div className="my-3">
        <label htmlFor="productQuantity">Lowest Orders Quantity</label><br />
        <input onChange={(e)=>setLowestQuantity(e.target.value)} type="number" name="productQuantity" required/>
        </div>

        <div className="my-3">
        <label htmlFor="productQuantity">Higest Orders Quantity</label><br />
        <input onChange={(e)=>setHighestQuantity(e.target.value)} type="number" name="productQuantity" required/>
        </div>
        
        <div className="my-3">
        <label htmlFor="productQuantity">Total Parts Quantity</label><br />
        <input onChange={(e)=>setproductQuantity(e.target.value)} type="number" name="productQuantity" required/>
        </div>
        
       
       {/* button need */}
       <div>
       <label htmlFor="productType">Select Your Option</label> <br />
       <select name="productType" required onChange={ (e)=>setOption(e.target.value)}>  
       <option value={true}>DropDown Menu</option>
        <option value={false}> Add product Brand</option>
       </select>
       {option === true? <div>
            <label htmlFor="productType">Product Brands</label> <br />
                <select name="productType" required onChange={ (e)=>setproductType(e.target.value)}>
                <option value="Uncategories" selected>Uncategories</option>
                <option value="Asus">Asus</option>
                <option value="Doel">Doel</option>
                <option value="HP">HP</option>
                <option value="Mac Os">Mac Os</option>
                <option value="Others">Others</option>
                
                </select>
            </div> : <div>
    <label htmlFor="productType">Product Type</label> <br />
<input onChange={(e)=>setproductType(e.target.value)} type="text" placeholder='Enter Your Product Type' name="productType" required/>
</div>

       }
       </div>

        <div className="my-3">
        <label htmlFor="productBody">Describe Your Product</label><br />
        <textarea className='area-manange' onChange={(e)=>setProductBody(e.target.value)} type="text" name="productBody" required/>
        </div>

        
        <input type="submit" value="Add Product" />

    </form>
</div>

</div>
  
</div>
</div>
    );
};
export default AddProducts;
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification, useSendPasswordResetEmail, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../../Hooks/Loading';
import useCreatePost from '../../../../Hooks/useCreatePost';
import useMongoDB from '../../../../Hooks/useMongoDB';


const MyProfile = () => {
let userUrl = 'https://whispering-refuge-62530.herokuapp.com/users'
    const {createApi} = useCreatePost();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(
        auth
      );
    const [updateEmail,  emailUpdating, emailError] = useUpdateEmail(auth);

    const [sendPasswordResetEmail, sendingRest, errorRest] = useSendPasswordResetEmail(
        auth
      );
//get correct user
const {dbUser,updateUser,updateDone,deleteUser } = useMongoDB();

     //default profile pic Image
     const profilePic = 'https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; 
//input data value receive from user
const [name, setName] = useState(user?.displayName);
const [phone, setPhone] = useState('' || dbUser?.phoneNumber);
const [photo, setPhoto] = useState(user?.photoURL ||profilePic);
const [email, setEmail] = useState('' );
const [linkdinUrl, setLinkdinUrl] = useState('https://www.linkedin.com/in/dhananjoycd/');
const [educationInfo, setEdueducationInfo] = useState(''||dbUser?.educationInfo);
const [address, setAddress] = useState(dbUser?.address);

    // console.log(user)
    let errorMessage;
if(error || updateError || verificationError || emailError ||errorRest){
    errorMessage = error?.message || updateError?.message ||verificationError?.message || emailError?.message || errorRest?.message; 
}
    if(loading || updating || sending || emailUpdating || sendingRest ){
    return <p><Loading></Loading></p>
    }


//effectively user experience increase
const handleEmail = async () => {
    await updateEmail(email);
    toast.success('Your email was Updated Successfully');
  }



  //update profile
  const handleFormSubmit = async e =>{
    e.preventDefault();  
    const displayName = name || user?.displayName;
    const phoneNumber = phone;
    const photoURL = photo || user?.photoURL;

    const data = {uid: user.uid, profileDone:true, displayName, email: user?.email, phoneNumber, photoURL, linkdinUrl, educationInfo, address};
    await updateProfile({displayName,photoURL});


if(dbUser?.profileDone){
  updateUser(dbUser?._id, data);
  toast.success('Your Profile was Updated Successfully');
   
  
}
else{
  createApi(userUrl, data);
  toast.success('First Time Updated Success');
}
   
  }


    const handdleSignOut =()=>{
     const yes= window.confirm('Are you sure to Sign Out?');

     if(yes){
      signOut(auth).then(() => { 
        navigate('/login');
      }).catch((error) => {
        // An error happened.
      });

     }
        
  }

    return ( <div>
      {user? <div className='container text-center my-5'>
            {errorMessage && `We found ${errorMessage}`}
<h3>Here, we show your Basic Information</h3>
{!dbUser&& <h3 className='text-danger font-title'> If You want to access Private rout, You have to update your profile </h3>}


<Card className='profile'>
 <div className='d-flex justify-content-center my-3'>
 <img className='profile-img' src={user?.photoURL} />
 </div>
  <Card.Body>
    <Card.Title>Name: <span className='text-danger'>{user?.displayName || 'New User'}</span></Card.Title>
   {
        dbUser?.role? <Card.Title>Status: <span className='rounded-pill bg-info text-dark px-3 py-1'>{dbUser?.role}</span></Card.Title>: <Card.Title>Status: <span className='rounded-pill bg-info text-dark px-3 py-1'>{'Viewer'}</span></Card.Title>
   }
    <Card.Text>
    Email: <span className='text-primary'>{user?.email}</span> <br />
  
   {
       dbUser && <span> Phone: <span className='text-primary'>{dbUser?.phoneNumber}</span> <br />
       Latest Education: <span className='text-primary'>{dbUser?.educationInfo}</span> <br />
       Address: <span className='text-primary'>{dbUser?.address}</span> <br />
        <span className='text-primary'><a className='btn btn-warning my-2 fw-bold font-title' href={dbUser?.linkdinUrl} target="_blank" > Linkdin Profile</a> </span> <br /></span>
   }
  
    </Card.Text>
    <Button onClick={handdleSignOut} variant="primary">Sign Out</Button>
  </Card.Body>
  
<div className='my-3'>
    <h3>Update Your Secret Information</h3>
  <span>

  <div className='mb-2'>
    <label htmlFor="email">Email</label> <br />
    <input  onChange={(e) => setEmail(e.target.value)} type="email"  value={email} name="email" id="" placeholder='Email'/>
</div>  
  <button className='btn btn-success'
        onClick={handleEmail}
      >
        Update email
      </button>
      <button className='ms-3 btn btn-danger'
        onClick={async () => {
          await sendPasswordResetEmail(email);
          alert('Sent email for Reset Password');
        }}
      >
        Reset password
      </button>
  </span>
</div>

</Card>


  <Card className='mt-3'>
  <div className='update Profile my-3'>
            <h3> Update your Profile</h3>
            {
              (dbUser?.profileDone)? <h6 className='text-success font-title p-2'> You can able to take order and Add Reviews <span className='text-primary'>But if you need update again,Please Click on Reset Profile Button</span></h6> : <h6 className='text-danger font-title  fs-5'>Becareful! You can Update Your Profile Once <span className='text-primary'>But if you need update again,Please Click on Reset Profile Button</span></h6>
            }
          

            <form onSubmit={handleFormSubmit}>

            <div className='mb-2'>
    <label htmlFor="displayName">Full Name</label> <br />
    <input  onChange={(e)=>setName(e.target.value)}  type="text" name="displayName" id="" placeholder='Full Name'/>
</div>  

<div className='mb-2'>
    <label htmlFor="email">Email</label> <br />
    <input value={user?.email} readOnly disabled  type="email" name="email" id="" placeholder='Email'/>
</div> 

<div className='mb-2'>
    <label htmlFor="phoneNumber">Phone Number</label> <br />
    <input onChange={(e)=>setPhone(e.target.value)
}  type="number" name="phoneNumber" id="" placeholder=" Enter Phone Number"/>
</div>  

 
<div className='mb-2'>
    <label htmlFor="linkdinUrl"> Linkdin Url </label> <br />
    <input onChange={(e)=>setLinkdinUrl(e.target.value)
}  type="text" name="linkdinUrl" id="" placeholder=" Linkdin Url"/>
</div>  

 

<div className='mb-2'>
    <label htmlFor="photoURL">Upload Profile Photo</label> <br/>
    <input onChange={(e)=>setPhoto(e.target.value)
}  type="text" name="photoURL" id="" placeholder='photoURL'/><br />
    <small className='text-danger'>Please Input your hosted Image URL only</small>
</div>  

<div className='mb-2'>
    <label htmlFor="educationInfo"> Education Info</label> <br />
    <textarea className='w-50' onChange={(e)=>setEdueducationInfo(e.target.value)
}  type="text" name="educationInfo" id="" placeholder="Enter Education Info "/>
</div> 

<div className='mb-2'>
    <label htmlFor="address"> Address </label> <br />
    <textarea className='w-50' onChange={(e)=>setAddress(e.target.value)
}  type="text" name="address" id="" placeholder="Enter Your Address"/>
</div> 

{
  dbUser?.profileDone?<input className='mb-2 btn btn-success' type="submit" value="Already Updated Profile" disabled/> : <input className='mb-2 btn btn-danger font-title fw-bold' type="submit" value="Update Profile Once" />
} 
     
</form>  


{
  dbUser?.profileDone &&
 <button onClick={()=>{
  deleteUser(dbUser._id, dbUser.uid)
 }} className="btn btn-danger fw-bolder fs-5">Reset Profile</button>
}

    </div> 
    
  </Card>
{/* for not verified people */}
     {
         !user?.emailVerified && 
          <div className='my-3'>
               <h3>Please, Verify Your Email to acces the whole Website <br /><small className='text-danger'>After Verify your email, Please Refresh this page</small></h3>
             <button
                 onClick={async () => {
                   await sendEmailVerification();
                   toast.success('Sent email');
                 }}
               >
                 Verify email
               </button>
             </div>
     }   
        

        </div> : <div> 
          
        <span className='d-flex align-items-center'>Have You already an Account? <Nav.Link as={Link} to="/login">Log In now</Nav.Link></span>
        <span className='d-flex align-items-center'>Have You need to create a new Account? <Nav.Link as={Link} to="/signup">Sign Up now</Nav.Link></span> <br />
          
          </div>}
    </div>
    );
};


export default MyProfile;
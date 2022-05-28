import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../../Hooks/Loading';
import useMongoDB from '../../../../Hooks/useMongoDB';


const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth);


    //get correct user
    const {dbUsers,updateUser, deleteUser} = useMongoDB();

   if(loading || !dbUsers?.length){
       return <Loading></Loading>
   }

    return (
        <div>
    <div className="table-responsive-md">
    <div className="d-flex justify-content-center my-3">
            <h3 className='text-center title px-2'>We Have <span className='text-warning'>{dbUsers?.length}</span>  users with Admin </h3>
            </div>
    <table className="table  text-center border table-striped">
    <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">SN.</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th className='bg-warning text-dark rounded' scope="col"  colSpan="2">Admin Action</th>
    </tr>
  </thead>
  <tbody>
  {
      dbUsers.map((dbUser, index) => <tr>
        <th scope="row">{index+1}</th>
        <td>{dbUser?.displayName}</td>
        <td>{dbUser?.email}</td>
        <td>{dbUser?.role ||'Viewer'}</td>

        <td> {
            (dbUser?.role ==='Admin') ? <Button variant="success" className='fw-bold b-title' size="sm" disabled>
          Already Admin
        </Button>:
        <Button onClick={()=>{
            const data ={ role: "Admin"}
            updateUser(dbUser._id, data)
        
        }} variant="success" className='fw-bold b-title' size="sm">
      Make Admin
    </Button>
            }</td>


        <td> <Button onClick={()=>{
            const data ={ role: "Admin"}
            deleteUser(dbUser._id)
    
        }} variant="danger" className='fw-bold b-title' size="sm">
    Remove User
    </Button></td>
      </tr>)
  }

  </tbody>

    </table>
    </div>
        </div>
    );
};

export default MakeAdmin;
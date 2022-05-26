import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import './Header.css';
import NavLink from './NavLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import  auth  from '../../../src/firebase.init'
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);


    //singout
    const handdleSignOut =()=>{
        const yes= window.confirm('Are you sure to Sign Out?');
   
        if(yes){
         signOut(auth).then(() => { 
           Navigate('/login');
         }).catch((error) => {
           // An error happened.
         });
   
        }
    }
  
      return (
          <div className='position-sticky fixed-top'>
    <Navbar className='navbar' collapseOnSelect expand="md" >
    <Container>
      {/* href diyeci cz web page ta refresh dorkar ace */}
    <Navbar.Brand className='bg-white p-2 rounded fw-bold font-title' href="/"> <span className='text-danger'>DRN</span> <span className='text-primary'>PC  House</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
       >
       
      </Nav>
      <div className='nav-res ms-auto'>
      <Nav className="">
  
  <NavLink className="ms-3 fw-bold "  as={Link} to={'/'}>Home</NavLink>
  <NavLink className="ms-3 fw-bold " as={Link} to="/blogs">Blogs</NavLink>
    <NavLink className="ms-3 fw-bold " title='Products of Users' as={Link} to="/parts">Parts</NavLink>
    <NavLink className="ms-3 fw-bold " title='Products of Users' as={Link} to="/reviews">Reviews</NavLink>
  {
    user? <>
    

    <NavLink className="ms-3 fw-bold" as={Link} to="/dashboard">Dash Board</NavLink>
    <span className='text-warning ms-3'>{user?.displayName} <button className='text-white fw-bold btn btn-danger' onClick={handdleSignOut} >( Sign Out )</button></span>
    </> : <>  <NavLink className="ms-3 fw-bold " as={Link} to="/login">Login</NavLink>
    <NavLink className="ms-3 fw-bold " as={Link} to="/signup">Sign Up</NavLink></>
  }
  
  
  
  </Nav>
      </div>
    </Navbar.Collapse>
    </Container>
  </Navbar>
          </div>
      );
};

export default Header;
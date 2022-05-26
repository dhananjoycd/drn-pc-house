import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useGetPost from '../../../../Hooks/useGetPost';

const DashBoardVar = () => {
  const [user, loading, error] = useAuthState(auth);
  //get correct user
let userUrl = 'http://localhost:5000/users'
const {posts} = useGetPost(userUrl);
 const dbUser = posts.find(p => {
    if(p?.uid === user?.uid  ){
        // dbUser.unshift(p)
        return p;
    }
})

    return (
        <>
  {['sm'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
    
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
         Dash Board
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            
              <Nav.Link as={Link} to="/dashboard/myprofile">My Profile</Nav.Link>
          {
            (dbUser?.role === 'Admin')? <>
                <Nav.Link as={Link} to="/dashboard/manageOrders">Manage Orders</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/addProducts">Add Products</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/manageProducts">Manage Products</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/admin">Make Admin</Nav.Link></>: <>
              <Nav.Link as={Link} to="/dashboard/myorders">My Orders</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/addreview">Add Review</Nav.Link>
              </>
          }
           
            </Nav>
           
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
<div className='container-md'>
    
<Outlet></Outlet>
</div>
</>
    );
};

export default DashBoardVar;
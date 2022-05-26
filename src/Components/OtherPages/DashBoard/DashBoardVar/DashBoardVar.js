import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const DashBoardVar = () => {
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
              <Nav.Link as={Link} to="/dashboard/myorders">My Orders</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/addreview">Add Review</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/myprofile">My Profile</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/manageOrders">Manage Orders</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/addProducts">Add Products</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/manageProducts">Manage Products</Nav.Link>
              <Nav.Link as={Link} to="/dashboard/admin">Make Admin</Nav.Link>
           
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
import React from 'react';
import { render } from "@testing-library/react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


const useModal = () => {

    // 
function ModalC(btnChange, btnShow, title, body) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <span className='ms-2 mt-3'>
    <Button variant="primary" onClick={handleShow}>
      {btnShow}
      </Button>
    </span>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>

          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {body} 
        </Modal.Body>


        <Modal.Footer>

          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
         { btnChange==true&&
              <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
         }

        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<ModalC />);

    return {ModalC};
};

export default useModal;
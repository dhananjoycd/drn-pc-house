import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useModal from '../../OkayModal/useModal';

const Review = (props) => {
  const {ModalC} = useModal()
  const {
    photoURL, displayName, review, reviewText 
  } = props?.review;

    return (
      <Col>
        <Card className='img-rv h-100'>
        <span className='d-flex justify-content-center my-2'><img src={photoURL} alt="profile pic" /></span>
        <Card.Body>
        <span className='d-flex justify-content-between bg-light px-3 py-1 rounded'>
        <Card.Title className='text-primary font-title'>{displayName}</Card.Title>
          <Card.Title className='text-danger'>{review}</Card.Title>
        </span>
          <Card.Text>
            {reviewText.slice(0,56)}
          </Card.Text>
        </Card.Body>

        <Card.Footer className="bg-dark text-center"> 
        {ModalC( false, 'See Details', 'Review Details',    <Card className='img-rv h-100'>
        <span className='d-flex justify-content-center my-2'><img src={photoURL} alt="profile pic" /></span>
        <Card.Body>
        <span className='d-flex justify-content-between bg-light px-3 py-1 rounded'>
        <Card.Title className='text-primary font-title'>{displayName}</Card.Title>
          <Card.Title className='text-danger'> Ratings: {review}</Card.Title>
        </span>
          <Card.Text className='font-body'>
            {reviewText}
          </Card.Text>
        </Card.Body>
      </Card>
            )}</Card.Footer>

      </Card>
      </Col>
    );
};

export default Review;
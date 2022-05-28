import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useMongoDB from '../../../Hooks/useMongoDB';
import Review from './Review/Review';

const Reviews = () => {
    const {reviews} = useMongoDB();
    return (
        <div className='container-lg my-3'>

<Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {
        reviews.map(review =><Review key={review?._id} review={review}></Review>)
      }

</Row>

         
        </div>
    );
};

export default Reviews;
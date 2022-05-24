import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <p className='pt-2 text-center mt-5'><Spinner animation="border" variant="danger" /> <br /> Please wait and keep patient</p>
    );
};

export default Loading;
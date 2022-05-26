import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import Banner from '../Banner/Banner';
import OkayModal from '../OtherPages/OkayModal/OkayModal';

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
         <Banner></Banner>


   </div>
    );
};

export default Home;
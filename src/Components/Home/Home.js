import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import useGetPost from '../../Hooks/useGetPost';
import Banner from '../Banner/Banner';
import OkayModal from '../OtherPages/OkayModal/OkayModal';
import Part from '../OtherPages/Part/Part';

const Home = () => {
    const {posts} = useGetPost('http://localhost:5000/pcparts');
   
    return (
        <div>
         <Banner></Banner>
         {/* pc parts 6 ta */}
         <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
{
    posts.slice(0,6).map(post => <Part key={post._id} post={post}></Part>)
}
  
</div>


   </div>
    );
};

export default Home;
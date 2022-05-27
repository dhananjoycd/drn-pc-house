import React from 'react';
import useGetPost from '../../Hooks/useGetPost';
import Banner from '../Banner/Banner';
import Part from '../OtherPages/Part/Part';

const Home = () => {
    const {posts} = useGetPost('http://localhost:5000/pcparts');
   
    return (
        <div>
         <Banner></Banner>
      <div className='container-xxl'>
      <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>All Products Collecton</h3>
            </div>
         <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-2 my-2 ">
             
{
    posts.slice(0,6).map(post => <Part key={post._id} post={post}></Part>)
}
  
</div>
      </div>


   </div>
    );
};

export default Home;
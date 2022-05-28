import React from 'react';
import Banner from '../Banner/Banner';
import Part from '../OtherPages/Part/Part';
import Loading from '../../Hooks/Loading';
import useMongoDB from '../../Hooks/useMongoDB';


const Home = () => {
const {pcParts} = useMongoDB();
    if(!pcParts.length){
        return <Loading></Loading>
    }
   
    return (
        <div>
         <Banner></Banner>
      <div className='container-xxl'>
          {/*6 collection */}
      <div>
      <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Latest 6 Products Collecton</h3>
            </div>
         <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 my-2 ">
             
{
    pcParts.slice(0,6).map(post => <Part key={post._id} post={post}></Part>)
}
  
</div>
      </div>

      {/* web  site summary*/}
    <div>
    <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Business Summary</h3>
            </div>

    </div>

      {/* 6 review */}
      <div>
      <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Latest 4 Review</h3>
            </div>
         <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 my-2 ">
             
{
    pcParts.slice(0,6).map(post => <Part key={post._id} post={post}></Part>)
}
  
</div>
      </div>

      {/* 5 Latest buyer*/}
    <div>
    <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Latest 5 Buyer</h3>
            </div>

    </div>

      {/* pc parts band*/}
    <div>
    <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Available Brand Partner</h3>
            </div>
            <div className='bg-light p-3 rounded row row-cols-2 row-cols-sm-3 row-cols-md-4  row-cols-lg-5 row-cols-xl-6 g-4 my-3'>
            <div className='col'>

<div className='card shadow h-100 text-center'>
<span className='bg-white py-1 text-dark fw-bold px-3 rounded '> Asus</span>
</div>
</div>

<div className='col'>
<div className='card shadow h-100 text-center'>
<span className='bg-white py-1 text-dark fw-bold px-3 rounded '> HP</span>
</div></div>

<div className='col'>
<div className='card shadow h-100 text-center'>
<span className='bg-white py-1 text-dark fw-bold px-3 rounded '> Lenevo</span>
</div></div>

<div className='col'>
<div className='card shadow h-100 text-center'>
<span className='bg-white py-1 text-dark fw-bold px-3 rounded '> Dell</span>
</div></div>
<div className='col'>
<div className='card shadow h-100 text-center'>
<span className='bg-white py-1 text-dark fw-bold px-3 rounded '> Mac Os</span>
</div></div>
<div className='col'>
<div className='card shadow h-100 text-center'>
<span className='bg-white py-1 text-dark fw-bold px-3 rounded '> Sony</span>
</div></div>

 

            </div>

    </div>

      </div>
   </div>
    );
};

export default Home;
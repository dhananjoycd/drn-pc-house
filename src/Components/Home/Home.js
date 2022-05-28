import React from 'react';
import Banner from '../Banner/Banner';
import Part from '../OtherPages/Part/Part';
import Review from '../OtherPages/Reviews/Review/Review';
import Loading from '../../Hooks/Loading';
import useMongoDB from '../../Hooks/useMongoDB';
import useOriganlUsers from '../../Hooks/useOriganlUsers';
import { Card } from 'react-bootstrap';
import { FaItchIo, FaPaypal, FaAngellist,FaBtc, FaPhoneAlt, FaTaxi} from 'react-icons/fa';



const Home = () => {
const {pcParts,orders, reviews} = useMongoDB();
const {makeOrginalUsers} = useOriganlUsers();

const buyersUID = [];
orders.map( uid => buyersUID.push(uid.uid));
const buyers = makeOrginalUsers(buyersUID, orders);


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

      {/*  summary*/}
    <div>


    <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Business Summary</h3>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 my-3">

                <div className="col">
                    <Card className='h-100 shadow text-center py-2 text-dark fw-bold font-title bg-light'>
                    <Card.Body>
                    <Card.Title className='text-primary fs-1'><FaItchIo/></Card.Title>
                    <Card.Text>
            It is one of the greatest Online shop
          </Card.Text>
                    </Card.Body>
                    </Card>
                </div>


                <div className="col">
                    <Card className='h-100 shadow text-center py-2 text-dark fw-bold font-title bg-light'>
                    <Card.Body>
                    <Card.Title className='text-primary fs-1'> <FaPhoneAlt/></Card.Title>
                    <Card.Text>
            We Suport our customer 24 hours in 7 days
          </Card.Text>
                    </Card.Body>
                    </Card>
                </div>


                <div className="col">
                    <Card className='h-100 shadow text-center py-2 text-dark fw-bold font-title bg-light'>
                    <Card.Body>
                    <Card.Title className='text-primary fs-1'> <FaTaxi/></Card.Title>
                    <Card.Text>
            We deliver our Products as fast as in  24 hours within 30 minutes
          </Card.Text>
                    </Card.Body>
                    </Card>
                </div>


                <div className="col">
                    <Card className='h-100 shadow text-center py-2 text-dark fw-bold font-title bg-light'>
                    <Card.Body>
                    <Card.Title className='text-primary fs-1'> <FaBtc/></Card.Title>
                    <Card.Text>
            Our Comapany Price value across the billion dollar and we want to change the world by online cuurency bitcion
          </Card.Text>
                    </Card.Body>
                    </Card>
                </div>


            </div>


    </div>

      {/* 6 review */}
      <div>
      <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Latest 4 Review</h3>
            </div>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 my-2 ">
             
{
    reviews.slice(0,6).map(review => <Review key={review._id} review={review}></Review>)
}
  
</div>
      </div>

      {/* 10 Latest buyer*/}
    <div>
    <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Latest 10 Buyer</h3>
            </div>
            <div className="container">
<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 my-3">
{
buyers.slice(0,10).map( user => <div className="col"><Card className='shadow text-center py-2 text-dark fw-bold font-title bg-info'>{user.displayName}</Card></div> )

}
</div>
</div>

    </div>

      {/* pc parts band*/}
    <div>
    <div className="d-flex justify-content-center mt-4 ">
            <h3 className='title text-center'>Available Brand Partner</h3>
            </div>
            <div className='bg-light p-3 rounded row row-cols-2 row-cols-sm-3 row-cols-md-4  row-cols-lg-5 row-cols-xl-6 g-4 my-3'>
            <div className='col '>

<div className='  card shadow h-100 text-center bg-warning'>
<span className='py-1 text-dark fw-bold px-3 rounded '> Asus</span>
</div>
</div>

<div className='col'>
<div className='  card shadow h-100 text-center bg-warning'>
<span className=' py-1 text-dark fw-bold px-3 rounded '> HP</span>
</div></div>

<div className='col'>
<div className='  card shadow h-100 text-center bg-warning'>
<span className='  py-1 text-dark fw-bold px-3 rounded '> Lenevo</span>
</div></div>

<div className='col'>
<div className='  card shadow h-100 text-center bg-warning'>
<span className='  py-1 text-dark fw-bold px-3 rounded '> Dell</span>
</div></div>
<div className='col'>
<div className='  card shadow h-100 text-center bg-warning'>
<span className='  py-1 text-dark fw-bold px-3 rounded '> Mac Os</span>
</div></div>
<div className='col'>
<div className='  card shadow h-100 text-center bg-warning'>
<span className='  py-1 text-dark fw-bold px-3 rounded '> Sony</span>
</div></div>

 

            </div>

    </div>

      </div>
   </div>
    );
};

export default Home;
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    //image Link
const banner2 = 'https://img.freepik.com/free-photo/circuit-board-electronic-computer-hardware-technology-motherboard-digital-chip_627829-10700.jpg?w=826&t=st=1653406736~exp=1653407336~hmac=366292a9680a6ec6869804495bdd141039387230824e08a5342df0d138b7f7e3';

const banner3 ='https://img.freepik.com/free-photo/male-technician-examining-mother-board-with-digital-multimeter_23-2147922353.jpg?w=826&t=st=1653406878~exp=1653407478~hmac=687e1b98228b570b8996f0955b82c861caa5a01dce9c9df66f067fb8fb9a03e0';
const banner1 = 'https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?w=826&t=st=1653406882~exp=1653407482~hmac=d0a04b9b195e91ebae7775e9888c05179bf170ac490aaf01f48b712bdd1e941b';

    return (
        <div className='rounded'>
        <Carousel>
  <Carousel.Item interval={8000}>
    <img
      className="d-block w-100  h-banner"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='b-title'>Do You Need PC Parts?</h3>
      <p className='b-body'>We committed to provide you the best parts of PC</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={8000}>
    <img
      className="d-block w-100 h-banner"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='b-title'>Zero Complain About us</h3>
      <p className='b-body'>We are the greatest company who provide best products</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-banner"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='b-title'>Most Popular In BD</h3>
      <p className='b-body'>DRN PC House is most popular for PC parts</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
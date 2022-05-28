import React from 'react';

const Footer = () => {
    return (
        <div className='mt-3'>
        <footer className="bg-dark">
       <section className="container pt-5">

      

        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3 align-items-center">

<div className="col text-start text-white font-title">
<ul className='list'>
    <li>About</li>
    <li> Report Us </li>
</ul>

</div>
   
  <div className="col text-start text-white font-title">
<ul className='list'>
    <li>Privacy and Policy</li>
    <li>Contact</li>

</ul>

  </div>



</div>
       <div className=' d-flex justify-content-center align-items-end py-2'> <p className="text-white">
                  © 2022, All rights reserved by <a className="text-decoration-none text-warning" href="https://dhananjoychandradas.blogspot.com/" target="_blank">DRN PC house</a> 
               </p></div>
       </section>
          </footer>
      </div>
   );
};
export default Footer;
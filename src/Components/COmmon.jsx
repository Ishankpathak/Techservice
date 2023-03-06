import React from 'react'
import img1 from '../images/img1.avif'
import { Link } from 'react-router-dom'

const COmmon = (props) => {
  return (
    <div>
         <section id='header' className='d-flex  d-flex align-items-center justify-content-center mt-2'>
        <div className='container-fluid nav_bg mt-2'>
          <div className='row'>
            <div className='col-10 mx-auto'>
                <div className="row">
                 <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                  <h1>{props.name} <strong className='brand-name'>TechServices</strong></h1>
                  <h4 className='my-3'>We are the team of talented developer making websites</h4>
                  <div className='mt-3'>
                      <Link to={props.visit} className='btn-get-started'>{props.btname}</Link>
                  </div>
                 </div>

               <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={img1} alt="home_img" className='img-fluid animated' />
               </div>
              
               </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default COmmon

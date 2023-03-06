import React from 'react'
// import web from '../images/img1.avif'
import Card from './Card'
const Service = () => {
  return (
    <>
      <div className="my-5">
         <h1 className='text-center'>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
         <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gap-3">
              <Card name="App development"/>
              <Card name="Web development"/>
              <Card name="SCO"/>
              <Card name="Content Writing"/>
              <Card name="Data Entry"/>
              <Card name="Copy Writing"/>
            </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default Service

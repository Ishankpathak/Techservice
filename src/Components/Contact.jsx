import React, { useState } from 'react'

const Contact = () => {
  const [data , setdata] = useState({  //state is defined
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })
  
  const InputEvent = (event)=>{
    const {name , value} = event.target;
    setdata((preVal)=>{
      return{
        ...preVal ,   //1.) inside preVal all data is send
        [name]:value,
      }
    })
  }

  const formSubmit = (e)=>{ //2.) second step
    e.preventDefault()   //to prevent reloding of page
    alert(`My name is ${data.fullname} and phone number is ${data.phone} email is ${data.email} message is ${data.msg}`);
  }
  return (
    <>
    <div className='my-3'>
          <h1 className='text-center'>Contact Us</h1>
    </div>

    <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formSubmit}>
          <div className="mb-3">

           <label htmlFor="exampleFormControlInput1" className="form-label">Enter Name</label>
           <input  className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="name"/>
         </div>
          <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label"> Enter Phone no</label>
           <input className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone number"/>
         </div>
          <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label"> Enter Email</label>
           <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@gmail.com"/>
         </div>
         <div className="mb-3">
           <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
           <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="msg" value={data.msg} onChange={InputEvent}></textarea>
         </div>
         <button type="submit" className="btn btn-primary  ">Submit Form</button>
         
         </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default Contact

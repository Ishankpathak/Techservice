import React from 'react'
import web from '../images/img1.avif'

const Card = (props) => {
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
      <img src={web} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" class="btn btn-primary btn-sm">Go somewhere</a>
      </div>
    </div>  
    </>
  )
}

export default Card

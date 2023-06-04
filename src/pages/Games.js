import React from 'react'
import Carousel from '../components/Carousel'
import "../styles/styleone.css";


function Games() {
  return (
    <div className='gamesFill'>
        
        <div className='gamesFill2'>
        <div className='homeTop'>
          <h1>Games</h1>
          <input type='text' placeholder='Search'/>

        </div>
        <Carousel />
        </div>
        </div>
  )
}

export default Games
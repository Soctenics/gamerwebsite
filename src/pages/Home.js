import React from 'react'
import "../styles/styleone.css";
import background from "../images/bgImage.jpg"
import Carousel from '../components/Carousel';



const title="Krunker";
const description="Lorem ipsum dolor sit amet consectetur. Lorem nam in magna senectus nunc porttitor."


function Home() {
  return (
    <div className='homeFill' style={{backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
      <div className='homeFill2' >
        <div className='homeTop'>
          <h1>Home</h1>
          <input type='text' placeholder='Search'/>

        </div>
        <div className='homeMiddle'>
          <h2>
            {title}
          </h2>
          <p>
          {description}
          </p>
          <button>Play Now</button>
          
        </div>
        
        <div className='homeBottom'>
        <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'

function Card(props) {
  return (
    <div className="cardStyle"><p>{props.content}</p>
    <div className='cDetails'><h3>Posted By: {props.author}</h3><h3>{props.timeStamp}</h3>
      </div></div>
  )
}

export default Card
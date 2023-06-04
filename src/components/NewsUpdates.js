import React from 'react'
import Card from './Card'

const notifications=[
  {
    author:"Author",
    timeStamp:"Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. ",
  },
  {
    author:"Author",
    timeStamp:"Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. ",
  },
  {
    author:"Author",
    timeStamp:"Date and Time",
    content:"Lorem ipsum dolor sit amet consectetur. Eget risus enim lorem quis turpis convallis nisl. Placerat ante tellus ultrices at. ",
  },
]

function NewsUpdates() {
  return (
    <div>
        <h3 className='updates'>Updates</h3>
        <div className='updateCards'>
          {notifications.map((item)=>(
             <Card author={item.author} timeStamp={item.timeStamp} content={item.content}/>
          ))}
       
        </div>
    </div>
  )
}

export default NewsUpdates
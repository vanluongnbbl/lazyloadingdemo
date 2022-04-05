import React from 'react'
import defaultImage from '../images/rose2.jpeg'

function Loading() {
  return (
    <div>
       <img src={defaultImage} height="100px" width={100} alt="..." />
    </div>
  )
}

export default Loading
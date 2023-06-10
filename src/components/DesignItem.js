import React from 'react'


function DesignItem({image, name, price}) {
  return (
    <div className='designItem'>
      <div style={{backgroundImage: `url(${image})` } }>  </div> 
      <h1> {name}</h1>
      <p>  &#x20B9;{price}  </p>
    </div>
  )
}

export default DesignItem

import React from 'react'
import { DesignList } from '../helpers/DesignList'
import DesignItem from '../components/DesignItem'
import "../styles/Design.css";

function Design() {
  return (
    <div className='designs'>
      <h1 className="designTitle"> Our Designs</h1>
      <div className="designList">
      { DesignList.map((designItem,key)=>{
        return <DesignItem 
          key = {key}
          image ={designItem.image}
          name ={designItem.name} 
          price={ designItem.price}/>
        
      }) }</div>
    </div>
  )
}

export default Design

import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
export const FoodItem = (props) => {
  const [itemCount,setItemCount] = useState(0)
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img src={props.image} alt="" className="food-item-image" />
            {!itemCount
              ?<img className='add' onClick={()=>setItemCount(pre=>pre+1)} src={assets.add_icon_white}/>
              :<div className='food-item-counter'>
                <img onClick={()=>setItemCount(pre=>pre-1)} src={assets.remove_icon_red}/>
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(pre=>pre-1)} src={assets.add_icon_green}/>
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{props.name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-description">{props.description}</p>
            <p className="food-item-price">${props.price}</p>
        </div>
    </div>
  )
}

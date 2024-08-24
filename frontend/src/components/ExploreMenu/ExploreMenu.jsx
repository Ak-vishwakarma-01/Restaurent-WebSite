import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = (props) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis excepturi ipsa consequuntur perspiciatis iure, reiciendis natus exercitationem autem tenetur?</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>props.setCategory(pre=>pre===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                    <img className={props.category===item.menu_name?"active":""} src={item.menu_image}></img>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu

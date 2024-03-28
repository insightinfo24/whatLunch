import React from 'react'
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './MenuTitle.scss';


const MenuTitle = () => {
  return (
    <div className='MenuTitle'>
      <MdOutlineRestaurantMenu className='MenuTitle-Icon' />
      <div className='MenuTitle-Title'>Menu List</div>
    </div>
  )
}

export default MenuTitle
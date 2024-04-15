import React from 'react'
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './MenuTitle.scss';

interface PropTypes{
  menu: string;
}

const MenuTitle = ({ menu } : PropTypes) => {
  return (
    <div className='MenuTitle'>
      <MdOutlineRestaurantMenu className='MenuTitle-Icon' />
      <div className='MenuTitle-Title'>{ menu === "lunch" ? "Menu List" : "Snak List"}</div>
    </div>
  )
}

export default MenuTitle
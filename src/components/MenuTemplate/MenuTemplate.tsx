import React from 'react'
import './MenuTemplate.scss';
import MenuList from '../../components/MenuList/MenuList';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import MenuInput from '../../components/MenuList/MenuInput';
import MenuDraw from '../../components/MenuDraw/MenuDraw';
import MenuCheckOff from '../MenuCheckOff/MenuCheckOff';

const MenuTemplate = (): JSX.Element => {
  return (
    <div className='MenuTemplate'>
      <div className='MenuTemplate-Contents'>
        <MenuTitle />
        <MenuCheckOff />
        <MenuList />
        <MenuInput />
        <MenuDraw />
      </div>
    </div>
  )
}

export default MenuTemplate
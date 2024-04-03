import React, { useEffect } from 'react';
import './MenuTemplate.scss';
import MenuList from '../../components/MenuList/MenuList';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import MenuInput from '../../components/MenuList/MenuInput';
import MenuDraw from '../../components/MenuDraw/MenuDraw';
import MenuCheckOff from '../MenuCheckOff/MenuCheckOff';
import axios from 'axios';
import { MenuTypes, menusState } from '../../recoil/menu';
import { useRecoilState } from 'recoil';

const MenuTemplate = (): JSX.Element => {
  const [menus, setMenus] = useRecoilState<MenuTypes[]>(menusState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('http://localhost:3002/menu/')
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
        }
        setMenus(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="MenuTemplate">
      <div className="MenuTemplate-Contents">
        <MenuTitle />
        <MenuCheckOff />
        <MenuList fetchData={fetchData} />
        <MenuInput fetchData={fetchData} />
        <MenuDraw />
      </div>
    </div>
  );
};

export default MenuTemplate;

import React, { useEffect } from 'react';
import './MenuTemplate.scss';
import MenuList from '../../components/MenuList/MenuList';
import MenuTitle from '../../components/MenuTitle/MenuTitle';
import MenuInput from '../../components/MenuList/MenuInput';
import MenuDraw from '../../components/MenuDraw/MenuDraw';
import MenuCheckOff from '../RightMenu/RightMenu';
import axios from 'axios';
import { MenuTypes, menusState } from '../../recoil/menu';
import { useRecoilState } from 'recoil';
import SnakList from '../SnakList/SnakList';

const MenuTemplate = (): JSX.Element => {
  const [menus, setMenus] = useRecoilState<MenuTypes[]>(menusState);
  
  // 메뉴 설정값
  const menu = -1;

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
        {/* 타이틀 */}
        <MenuTitle menu={menu}/> 

        <div className='RightButton'>
          {/* 클리어 버튼 */}
          <MenuCheckOff />
        </div>

        {/* 메뉴 목록 */}
        {menu > 0 ? 
          <MenuList fetchData={fetchData} />
          :
          <SnakList />
        }

        {/* 메뉴 입력창 */}
        <MenuInput fetchData={fetchData} />

        {/* 뽑기 버튼 */}
        <MenuDraw />


      </div>
    </div>
  );
};

export default MenuTemplate;

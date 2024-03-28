import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil';
import { menusState, MenuTypes } from '../../recoil/menu';
import MenuItem from './MenuItem';
import './MenuList.scss';

const MenuList = (): JSX.Element => {
  const [menus, setMenus] = useRecoilState<MenuTypes[]>(menusState);

  const onComplete = useCallback((id: number): void => {
    setMenus(menus.map((menu: MenuTypes) => {
      // 매개변수로 받은 id와 같은 객체만 완료상태 업데이트
      return menu.id === id ? { ...menu, isExclude: !menu.isExclude } : menu;
    }));
  }, [setMenus, menus]);

  const onDelete = useCallback((id: number) => {
    // 매개변수로 받은 id와 동일하지 않는 객체들만 필터링
    setMenus(menus.filter((menu: MenuTypes) => menu.id !== id));
  }, [setMenus, menus]);


  return (
    <div className='MenuList'>
      {
        menus.length > 0 ? menus.map((menu: MenuTypes) => {
          const { id, contents, isExclude, weight } = menu;

          return (
            <MenuItem
              key={id}
              id={id}
              contents={contents}
              weight={weight}
              isExclude={isExclude}
              onComplete={onComplete}
              onDelete={onDelete}
              menus={menus}
              setMenus={setMenus}              
            />
          );
        }) :
        <div className='MenuList-NoList'>{'메뉴가 없습니다. 자유롭게 추가해보세요!'}</div>
      }
    </div>
  )
}

export default MenuList
import React, { useState } from 'react'
import './MenuCheckOff.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MenuTypes, menusState } from '../../recoil/menu';

const MenuCheckOff = (): JSX.Element => {
  const [isClear, setIsClear] = useState<boolean>(false);
  const menus = useRecoilValue<MenuTypes[]>(menusState);
  const setExcludeClear = useSetRecoilState<MenuTypes[]>(menusState);

  const onCheckClear = () => {
    setExcludeClear(menus.map((menu: MenuTypes) => {
      return !isClear ? { ...menu, isExclude: true} : {...menu, isExclude: false};
    }))

    setIsClear(!isClear);
    return;
  }

  return (
    <div className='MenuCheckOff'>
      <button
        className='MenuCheckOff-Button'
        onClick={onCheckClear}
      >
        {'CLEAR'}
      </button>
    </div>
  )   
}

export default MenuCheckOff;
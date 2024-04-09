import React, { useCallback, useState } from 'react'
import './RightMenu.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MenuTypes, menusState } from '../../recoil/menu';
import MenuHistoryModal from '../Modal/MenuHistoryModal';

const MenuCheckOff = (): JSX.Element => {
  const [isClear, setIsClear] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const menus = useRecoilValue<MenuTypes[]>(menusState);
  const setExcludeClear = useSetRecoilState<MenuTypes[]>(menusState);

  const onModal = useCallback((): void => {
    setIsModal(true);
  }, []);

  const onCheckClear = () => {
    setExcludeClear(menus.map((menu: MenuTypes) => {
      return !isClear ? { ...menu, isExclude: true } : { ...menu, isExclude: false };
    }))

    setIsClear(!isClear);
    return;
  }

  return (
    <>
      {/* MenuCheckOff Button */}
      <button
        className='RightButton-Button'
        onClick={onCheckClear}>
        {'CLEAR'}
      </button>

      {/* MenuHistory Button */}
      <button
        className='RightButton-Button'
        onClick={onModal}>
        {"최근 결과"}
      </button>

      {isModal && (
        <MenuHistoryModal
          setIsModal={setIsModal}
        />
      )}
    </>
  )
}

export default MenuCheckOff;
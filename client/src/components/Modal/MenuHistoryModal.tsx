import React, { Dispatch, SetStateAction, useCallback } from 'react'
import './MenuHistoryModal.scss';

interface PropTypes{
  setIsModal: Dispatch<SetStateAction<boolean>>;
}
const MenuHistoryModal = ({
  setIsModal
}: PropTypes): JSX.Element => {

  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  return (
    <>
      <div className='MenuHistoryModal-Overlay' onClick={onCloseModal}></div>
      <div className='MenuHistoryModal'>
        <div className='MenuHistoryModal-Title'>
          <div>{"최근 당첨 리스트"}</div>
        </div>
        <button
          className='MenuModal-Contents-Button'
          onClick={onCloseModal}
        >
          {"닫기"}
        </button>
      </div>
    </>
  )
}

export default MenuHistoryModal
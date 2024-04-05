import React, { useCallback, useState } from 'react'
import MenuHistoryModal from '../Modal/MenuHistoryModal';
import './MenuHistory.scss';

const MenuHistory = (): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const onModal = useCallback((): void => {
    setIsModal(true);
  }, []);

  return (
    <>
      <button
        className='MenuHistory-Button'
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

export default MenuHistory
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import './MenuHistoryModal.scss';
import axios from 'axios';
import { FaClipboardList } from "react-icons/fa";

interface PropTypes{
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

interface History{
  id: number;
  first: string;
  second: string;
  third: string;
  pickNum: number;
  createdAt: Date;
}

const MenuHistoryModal = ({
  setIsModal
}: PropTypes): JSX.Element => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    getHisotryList();
  }, [])

  const getHisotryList = async () => {
    await axios.get('http://localhost:3002/history/')
    .then(response => {
      if (response.status === 200) {
        setHistoryList(response.data);
        console.log(response.data);
      }
    }); 
  }  

  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  const dateForm = (date) => {
    const createdDate = new Date(date);
    return "(" + createdDate.getMonth() + "월 " + createdDate.getDate() + "일)";
  }

  return (
    <>
      <div className='MenuHistoryModal-Overlay' onClick={onCloseModal}></div>
      <div className='MenuHistoryModal'>
        <div className='MenuHistoryModal-Title'>
          <div>{"최근 당첨 리스트 "}<FaClipboardList /></div>
        </div>
        <div className='MenuHistoryModal-List'>
          {historyList.length > 0 ? historyList.map((list : History) => {
            return (
              <li key={list.id}>
                <span className={list.pickNum === 0 ? 'MenuHistoryModal-Pick' : '' }>{list.first}</span>
                <span className={list.pickNum === 1 ? 'MenuHistoryModal-Pick' : '' }>{list.second}</span>
                <span className={list.pickNum === 2 ? 'MenuHistoryModal-Pick' : ''}>{list.third}</span>
                <span>{dateForm(list.createdAt)}</span>
              </li>
            );
          }) : (<span>{'당첨 리스트가 없습니다'}</span>)}
        </div>

        
        <button
          className='MenuHistoryModal-Button'
          onClick={onCloseModal}
        >
          {"닫기"}
        </button>
      </div>
    </>
  )
}

export default MenuHistoryModal
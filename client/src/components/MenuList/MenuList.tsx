import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { menusState, MenuTypes } from '../../recoil/menu';
import MenuItem from './MenuItem';
import './MenuList.scss';
import axios from 'axios';
import Swal from 'sweetalert2';

interface PropTypes {
  fetchData: () => void;
}

const MenuList = ({ fetchData }: PropTypes): JSX.Element => {
  const [menus, setMenus] = useRecoilState<MenuTypes[]>(menusState);

  const onComplete = useCallback(
    async (id: number) => {
      console.log('clinet id: ', id);
      await axios.get('http://localhost:3002/menu/' + id).then(response => {
        if (response.status === 200) {
          console.log('update Success!');
        }
      });
      fetchData();
      // setMenus(
      //   menus.map((menu: MenuTypes) => {
      //     // 매개변수로 받은 id와 같은 객체만 완료상태 업데이트
      //     return menu.id === id
      //       ? { ...menu, isExclude: !menu.isExclude }
      //       : menu;
      //   }),
      // );
    },
    [setMenus, menus],
  );

  const onDelete = useCallback(
    (id: number) => {
      Swal.fire({
        width: '400px',
        title: '정말 삭제하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete('http://localhost:3002/menu/' + id).then(response => {
            if (response.status === 200) {
              console.log('delete Success!');
            }
          });
          fetchData();
        }
      })
      // 매개변수로 받은 id와 동일하지 않는 객체들만 필터링
      // setMenus(menus.filter((menu: MenuTypes) => menu.id !== id));
      
    },
    [setMenus, menus],
  );

  return (
    <div className="MenuList">
      {menus.length > 0 ? (
        menus.map((menu: MenuTypes) => {
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
              fetchData={fetchData}
            />
          );
        })
      ) : (
        <div className="MenuList-NoList">
          {'메뉴가 없습니다. 자유롭게 추가해보세요!'}
        </div>
      )}
    </div>
  );
}

export default MenuList;

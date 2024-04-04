import React, { useCallback, useState } from 'react';
import { MenuTypes, menusState } from '../../recoil/menu';
import { FaPen, FaPlus, FaMinus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import './MenuItem.scss';
import MenuModal from '../../components/MenuModal/MenuModal';
import axios from 'axios';

interface PropTypes {
  id: number;
  contents: string;
  isExclude: boolean;
  weight: number;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  fetchData: () => void;

  menus: MenuTypes[];
  setMenus: SetterOrUpdater<MenuTypes[]>;
}

const MenuItem = ({
  id,
  contents,
  weight,
  isExclude,
  onComplete,
  onDelete,
  fetchData,
  menus,
  setMenus,
}: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>('');
  const setModifyWeights = useSetRecoilState<MenuTypes[]>(menusState);

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyMenu = useCallback(async (): Promise<void> => {
    if (!modifyContents.trim()) {
      return;
    }

    await axios
      .patch('http://localhost:3002/menu/', { id: id, contents: modifyContents })
      .then(response => {
        if (response.status === 200) {
          console.log('update Success!');
        }
      });

    // setMenus(menus.map((menu: MenuTypes) => {
    //   return menu.id === id ? { ...menu, contents: modifyContents } : menu;
    // }));

    setIsModal(false);
    fetchData();
  }, [id, modifyContents, setMenus, menus]);

  const onStackPlus = useCallback((): void => {
    setModifyWeights(
      menus.map((menu: MenuTypes) => {
        return menu.id === id ? { ...menu, weight: weight + 1 } : menu;
      }),
    );
  }, [menus, weight]);

  const onStackMinus = useCallback((): void => {
    setModifyWeights(
      menus.map((menu: MenuTypes) => {
        return menu.id === id && menu.weight > 0
          ? { ...menu, weight: weight - 1 }
          : menu;
      }),
    );
  }, [menus, weight]);

  return (
    <>
      <div className="MenuItem">
        <div
          title={contents}
          className={isExclude ? 'MenuItem-Completed' : ''}
          onClick={() => onComplete(id)}
        >
          {contents}
        </div>

        <div className="MenuItem-Icons">
          {/* 스택 증가 버튼 */}
          <FaPlus className="MenuItem-Icons-Plus" onClick={onStackPlus} />
          {/* 스택 감소 버튼 */}
          <FaMinus className="MenuItem-Icons-Plus" onClick={onStackMinus} />
          {/* 메뉴 명 수정 버튼 */}
          <FaPen className="MenuItem-Icons-Pen" onClick={onModify} />
          {/* 메뉴 삭제 버튼 */}
          <MdClose
            className="MenuItem-Icons-Close"
            onClick={() => onDelete(id)}
          />
        </div>
      </div>

      {isModal && (
        <MenuModal
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          onModifyMenu={onModifyMenu}
        />
      )}
    </>
  );
};

export default MenuItem
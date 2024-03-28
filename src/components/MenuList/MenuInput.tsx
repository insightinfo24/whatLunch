import React, {ChangeEvent, useCallback, KeyboardEvent} from 'react'
import { FaPen } from 'react-icons/fa';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { inputState, menusState, MenuTypes } from '../../recoil/menu';
import './MenuInput.scss';

const MenuInput = (): JSX.Element => {
  const [contents, setContents] = useRecoilState<string>(inputState);

  const menus = useRecoilValue<MenuTypes[]>(menusState);
  const setMenus = useSetRecoilState<MenuTypes[]>(menusState);
  // useRecoilValue = get 변수
  // useSetRecoilState = setter 지정
  
  const addMenu = useCallback((): void => {
    if (!contents.trim()) {
      return;
    }

    const nextId: number = menus.length > 0 ? menus[menus.length - 1].id + 1 : 0;
    // 배열에 값이 존재할시, 고유값은 마지막 인덱스에 위치한 id값에서 1을 늘려줘서 고유값 생성.
    // 만약 값이 존재하지 않을시 초기값은 0

    const menu: MenuTypes = {
      id: nextId,
      contents,
      isExclude: false,
      weight: 100,
    };

    setMenus([...menus, menu]);

    setContents('');
  }, [contents, setContents, setMenus, menus]);
  
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setContents(value);
  }, [setContents]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addMenu();
    }
  }, [addMenu]);   

  return (
    <div className='MenuInput'>
      <input
        type='text'
        className='MenuInput-Input'
        value={contents}
        onChange={onChange}
        placeholder='메뉴를 입력해보세요!'
        onKeyDown={onKeyDown}
      />
      <FaPen className='MenuInput-Button' onClick={addMenu} />
    </div>
  )
}

export default MenuInput
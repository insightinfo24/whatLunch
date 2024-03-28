import { atom } from 'recoil';

// npx serve build

export interface MenuTypes {
  id: number;
  contents: string;
  isExclude: boolean;
  weight: number;
}

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
})

export const menusState = atom<MenuTypes[]>({
  key: 'menus',

  default: [
    {
      id: 1,
      contents: '분식',
      isExclude: false,
      weight: 100,
    },

    {
      id: 2,
      contents: '수백당',
      isExclude: false,
      weight: 30,
    },

    {
      id: 3,
      contents: '갈비탕',
      isExclude: false,
      weight: 100,
    },

    {
      id: 4,
      contents: '밀면',
      isExclude: false,
      weight: 100,
    },

    {
      id: 5,
      contents: '해장국',
      isExclude: false,
      weight: 100,
    },

    {
      id: 6,
      contents: '짬뽕',
      isExclude: false,
      weight: 100,
    },

    {
      id: 7,
      contents: '돈까스',
      isExclude: false,
      weight: 100,
    },

    {
      id: 8,
      contents: '햄버거',
      isExclude: false,
      weight: 100,
    },

    {
      id: 9,
      contents: '닭국수',
      isExclude: false,
      weight: 50,
    },

    {
      id: 10,
      contents: '낙곱새',
      isExclude: false,
      weight: 50,
    },
    
    {
      id: 11,
      contents: '생선정식',
      isExclude: false,
      weight: 100,
    },

    {
      id: 12,
      contents: '한솥',
      isExclude: false,
      weight: 100,
    },

    {
      id: 13,
      contents: '튀김우동',
      isExclude: false,
      weight: 100,
    },
  ]
})

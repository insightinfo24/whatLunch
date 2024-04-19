import { atom } from 'recoil';

export interface SnakTypes {
  id: number;
  contents: string;
}

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
})

export const snaksState = atom<SnakTypes[]>({
  key: 'snaks',

  default: [
    {
      id: 1,
      contents: '오므라이스',
    },

    {
      id: 2,
      contents: '돈까스',
    },

    {
      id: 3,
      contents: '참치찌개',
    },

    {
      id: 4,
      contents: '김치찌개',
    },

    {
      id: 5,
      contents: '고등어찌개',
    },

  ]
})
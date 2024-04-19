import React from 'react'
import { useRecoilState } from 'recoil';
import { snaksState, SnakTypes } from '../../recoil/snak';
import './SnakList.scss';

const SnakList = (): JSX.Element => {
  const [snaks, setSnaks] = useRecoilState<SnakTypes[]>(snaksState);

  return (
    <div className='SnakList'>
      {snaks.length > 0 ?
        snaks.map((snak: SnakTypes) => {
          const { id, contents } = snak;

          return (
            <span key={id}>{contents}</span>
          )
        })
        : (
          <div className='SnakList-NoList'>
            {'목록이 없습니다.'}
          </div>
        )
      }
    </div>
  )
}

export default SnakList;
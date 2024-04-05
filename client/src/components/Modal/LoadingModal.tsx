import React, { Dispatch, SetStateAction, useCallback } from 'react';
import './LoadingModal.scss';
import { HashLoader } from 'react-spinners';

interface PropTypes {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingModal = ({
  setIsLoading,
}: PropTypes): JSX.Element => {
  const onCloseModal = useCallback((): void => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <>
      <div className='LoadingModal-Overlay' onClick={onCloseModal}></div>
      <div className='LoadingModal'>
        <div className='LoadingModal-Title'>
          <div>{"Loading..."}</div>
        </div>
        <div className='LoadingModal-Contents'>
          <HashLoader
            size={80}
            color='#88ff65'
            speedMultiplier={1.5}
          />
        </div>
      </div>
    </>
  )
}

export default LoadingModal
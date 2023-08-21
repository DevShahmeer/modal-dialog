import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from './modalSlice';

const Modal = ({children}) => {

  const isOpen =  useSelector(state => state.modal.isOpen);
  const dispatch = useDispatch()

  if(!isOpen){
    return null
  };
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='close-button' onClick={() => dispatch(closeModal())}>Close</button>
        {children}
      </div>
      
    </div>
  )
}

export default Modal
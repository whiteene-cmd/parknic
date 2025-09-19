import React, { Children, useEffect } from 'react'

const Modals = ({onClose, children}) => {

    //배경에 스크롤이 생기지 않도록함.
    useEffect(()=>{
        const original = document.body.style.overflow;
        document.body.style.overflow= 'hidden'
        return()=>{
            document.body.style.overflow = original
        }
    }, [])
  return (
    <div className='modal-bg' onClick={onClose} role='modal'>
        <div className="modal-panel" onClick={(e)=> e.stopPropagation()}>
            <button type='button' onClick={onClose}>X</button>
            {children}
        </div>
    </div>
  )
}

export default Modals

import React, { useEffect, useState } from 'react'
import DetailPlus from './DetailPlus'
import Modal from './component/Modals';
import Toast from './component/Toast'
import './shoes.css'


const Detail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cartCount , setcartCount] = useState(0);
    const [toast, setToast] = useState(null);

    const openImage = () => setIsModalOpen(true)
    const closeImage = () => setIsModalOpen(false)
    const addCart = () => {
        setcartCount((prev) => prev + 1)
        setToast({message: '장바구니에 담았습니다'})
    }
    //토스트 자동닫힘
    //토스트가 뜨면 1.8초 뒤에 사라지고, 중간에 변경/ 종료되면 타이머를 정리
    useEffect(()=> {
        if (!toast) return; //토스트가 처리할게 없으면 종료
        const t = setTimeout(()=> setToast(null), 1800);
        return()=> clearTimeout(t); //clean 코드로 timeOut함수를 종료
    }, [toast]) //toast상태가 바뀔때마다 살행해줌

    //ESC모달 닫기
    useEffect(()=>{
        const onKey = (e) => {
            if (e.key==="Escape") setIsModalOpen(false)
        }
    window.addEventListener('keydown', onKey)
        return()=> window.removeEventListener('keydown', onKey)
    }, [])
  return (
    <div className='shoes-wrap'>
        <header>
            <h1>SHOES NARA</h1>
            <div className='cart'>🛒 {cartCount}</div>
        </header>
        <main>
            <DetailPlus onAddCart={addCart} openImage={openImage} />
        </main>
        {/* 모달 열림 상태일때만 렌더링 */}
        {
            isModalOpen && (
                <Modal onclose={closeImage}>
                    <img src='https://images.unsplash.com/photo-1584432383638-6d7e15c03f75?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='신발' className='modal-image'/>
                </Modal>
            )
        }
        {toast && <Toast>{toast.message}</Toast>}
    </div>
  )
}

export default Detail
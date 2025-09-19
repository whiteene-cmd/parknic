import React, { useState } from 'react'
import './shoes.css'

const DetailPlus = ({onAddCart, openImage}) => {
  const [tab, setTab] = useState('detail'); //detail |review|qna
  const handelAddCart = onAddCart || (()=> {});
  const handelOpenImage = openImage || (()=> {});
  return (
    <div className="shoes-wrap">
      <div className='shoes-cont'>
        <figure>
          <img src='https://images.unsplash.com/photo-1584432383638-6d7e15c03f75?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='신발' className='modal-image'
          onClick={handelOpenImage}
          title='이미지를 클릭하면 확대됩니다.'
          />
        </figure>
        <div className='shoes-info'>
          <h2>나이키 리미티드 운동화</h2>
          <p className='price'>1,500,000원</p>
          <div className='action'>
            <button
            type='button'
            className='btn btnPrimary'
            onClick={handelAddCart}
            >장바구니</button>
            <button type='button' className='btn' onClick={handelOpenImage}>이미지 확대</button>

            {/* //tab */}
          <div className="tabs" role="tablist" aria-label="상품 정보 탭">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'detail'}
            className={`tab ${tab === 'detail' ? 'active' : ''}`}
            onClick={() => setTab('detail')}
          >
            상세
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'review'}
            className={`tab ${tab === 'review' ? 'active' : ''}`}
            onClick={() => setTab('review')}
          >
            리뷰
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'qna'}
            className={`tab ${tab === 'qna' ? 'active' : ''}`}
            onClick={() => setTab('qna')}
          >
            문의
          </button>
        </div>

        
        {/* 탭 콘텐츠 */}
        <div className="tab-panel">
          {tab === 'detail' && (
            <ul className="bullets">
              <li>가벼운 쿠셔닝으로 장시간 러닝에 적합.</li>
              <li>통기성 좋은 매쉬 소재.</li>
              <li>초보 러너에게 추천.</li>
            </ul>
          )}

          {tab === 'review' && (
            <div className='review'>
              <div >
              <p>⭐️⭐️⭐️⭐️ (128)</p>
              <p>“발볼 넓은데 편해요!”</p>
            </div>
            <div>
              <p>⭐️⭐️⭐️⭐️⭐️ (256)</p>
              <p>“오래 걸어도 발이 아프지 않아요!”</p>
            </div>

            </div>
          )}

          {tab === 'qna' && (
            <div className='tab'>
              <strong>Q. 방수되나요?</strong>
              <p>A. 생활방수 정도는 가능합니다.</p>
              <strong>Q. 가죽인가요?</strong>
              <p>A. 천연 소가죽을 사용해 부드럽고 튼튼합니다.</p>
              <strong>Q. 발 볼이 넓은 편인가요?</strong>
              <p>A. 동양인기준 평균 발폭으로 제작하였습니다.</p>
              <strong>Q. 몇 사이즈까지 나오나요?</strong>
              <p>A. 남녀 공용으로 220~280mm까지 있습니다.</p>
            </div>
          )}
        </div>
          </div>
        </div>
        
      </div>
        
    </div>
  )
}

export default DetailPlus
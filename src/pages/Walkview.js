import React from 'react'
import mywalkMovie from '../assets/mywalk_mov.mp4'


const Walkview = () => {
  
  return (
    <div className='mywalkWrap'>
      <div className='mywalkMov'>
        <video src={mywalkMovie} autoPlay loop muted preload='auto' playsInline></video>
      </div>
    <section className='contents'>
      <div class="diary">
        <h2>🧩산책 일기쓰기</h2>
        <textarea placeholder='오늘은 어디에 다녀왔나요?📝'></textarea>
      </div>
      <div className='reviewArea'>
        <h2>📝다른 사람의 일기를 구경해보세요!</h2>
        <div class="review1">
          <figure><img src='https://www.telltrip.com/wp-content/uploads/2025/04/Han-River-Park-3.jpg' alt='부암동 골목'/></figure>
          <p>애인과 함께 부암동 골목을 산책했어요. 조용하고 느긋하게 걸을 수 있어서 너무 좋았습니다. 나만 알고싶은 장소지만 다른 사람도 이 기분을 느껴봤으면 좋겠다는 마음이 더 크네요. 다들 산책한번 다녀오세요</p>
        </div>
        <div class="review1">
          <figure><img src='https://cdn.wolyo.co.kr/news/photo/201406/20971_17365_3730.jpg' alt='반포 한강공원'/></figure>
          <p>반포 한강공원의 야경은 정말 멋져요! 외국인 친구가 있으면 꼭 여기 데려오세요. 아마 무척 좋아할 거예요.</p>
        </div>
        <div class="review1">
          <figure><img src='https://cdn.crowdpic.net/detail-thumb/thumb_d_EE1103855FCF56EE8F9B99AD6AFC1407.jpg' alt='양재시민의숲'/></figure>
          <p>시민의 숲에 다녀왔어요. 나무가 오래돼서 멋드러진 경관을 연출하는게 좋았어요. 예전에는 시민의 숲에 촬영하는 사람이 많아서 다니기 힘들었는데 요즘은 쾌적해져서 다니기 좋아요.</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Walkview
import React, { useEffect, useState } from 'react'
import RecomCard from '../component/RecomCard';
//import AboutCard from '../component/AboutCard';

const About = () => {
  const [all, setAll] = useState([]); //전체 데이터상태
  const [showAll, setShowAll] = useState(false); //더보기 버튼 클릭 상태에 따라 true/false
  useEffect(()=>{
    fetch('/db.json')
    .then(r=>r.json()) //json형태로 데이터 변환
    .then(data=>setAll(data.items || [])) //json에서 title로 되어있는 애들만 뽑아줘.
    .catch(console.error);
  }, []) //페이지가 로드될 때 한번만 실행
  
  const visible = setAll ? all : all.slice(0, 10);
  const restCount = Math.max(all.length - 10, 0); //전체 데이터 갯수에서 - 10을 뺀 나머지를 보여주고 나머지가 음수일 경우에는 0으로 처리.
  return (
    <div className='contents'>
      <div className="titleArea">
        <h2><span>밤나들이</span> 산책 추천 코스</h2>
        <small>🎈 총 {all.length}개 코스 중 상위 10개를 보여드립니다.</small>
      </div>
      <div className="aboutList">
        {visible.map((item)=>(
          <RecomCard key={item.id} item={item} />
        ))}
      </div>

      {
        !showAll && restCount > 0 && (
          <div className='btn-area'>
            <button onClick={()=>setShowAll(true)}>
              더보기(+{restCount})
            </button>
          </div>
        )
      }
    </div>
  )
}

export default About
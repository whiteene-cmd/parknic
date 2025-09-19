import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import "../App.css";
import "react-multi-carousel/lib/styles.css";
import RecomCard from '../component/RecomCard';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


const Home = () => {
    const [recs, setRecs] = useState([]);
    useEffect(()=>{
      fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((r)=> r.json()) //요청한 데이터를 json형태로 바꿔줘
      .then((data)=> {
        console.log("전체데이터:", data);
        const items = data.items || []; //items가 있으면 그대로 보여주고 없으면 빈 배열로 처리 ->items데이터가 항상 배열로 처리되도록 해주는 구문
        console.log("items 배열:", items)
  
        //db.json에서 recommended 라는 값이 true이면 그 요소만 모아서 새 배열을 만든 다음 onlyRecommended에 담아줘.
        const onlyRecommended = items.filter((m)=> m.recommended);
        //console.log("추천만:", onlyRecommended)

        const firstFour = onlyRecommended.slice(0,4);
        //console.log('앞4개만 짤라줘', firstFour)

        setRecs(firstFour);
      })
      .catch((err)=>{
          console.log("db.json 로드 실패:", err)
        }) 
    }, []); //[]은 처음 한번만 자동 실행

  return (
    <div className='contents'>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2500}
        className="hero-slide"
        >
          <div>
            <img src='https://www.telltrip.com/wp-content/uploads/2025/04/Han-River-Park-3.jpg' alt='반포한강공원'/>
          </div>
          <div>
            <img src='https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDZfNzgg/MDAxNTU0NDgxODU1ODM0.Nb1mJVihtIN1JPq1VOOOk4kCYXSwkQFlUEeZ53-Ov1wg.Hmm_bZHt_xsjhLB0mbm5UFxTlEiI5MKbS6hpFI-3VZkg.JPEG.happyrain012/902A6805.jpg?type=w800' alt='익선동 한옥길'/>
          </div>
          <div>
            <img src='https://cdn.crowdpic.net/detail-thumb/thumb_d_EE1103855FCF56EE8F9B99AD6AFC1407.jpg' alt='양재시민의 숲'/>
          </div>
          <div>
            <img src='https://cdn.hsnews.co.kr/news/photo/202109/107496_59255_5232.gif' alt='노을공원'/>
          </div>
      </Carousel>

      <div className='intro-text'>
        <h2>
          <span>Parknic </span>
          <span>-여유를 가지는 산책시간-</span>
        </h2>
      </div>
      <div className='home-text'>
        서울을 걷는 가장 쉬운 방법, 오늘의 산책 코스.<br/>
      기분·시간·분위기 맞춤 필터—야경부터 한옥길까지.<br/>
      추천만 누르면 인생 코스 픽(다리는 본인 책임 😉).
      </div>

      <div className='recommend'>
        <h2>오늘의 ROAD</h2>
        <div className='recom-card'>
          {
            recs.map((item)=>(
              <RecomCard key={item.id} item={item}/>
            ))
          }
        </div>
      </div>


    </div>

    
  )
}

export default Home
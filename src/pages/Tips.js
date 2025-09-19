import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tips.css'
const Tips = () => {
  return (
    <div className='contents'>
      <Tabs>
    <TabList>
      <Tab>🍱 도시락</Tab>
      <Tab>🏃‍♂️ 런닝</Tab>
      <Tab>🎐 휴식</Tab>
    </TabList>

    <TabPanel>
      <div class="list">
        <h2>잔디 위 미식 산책, 도시락 가이드</h2>
        <figure className='sidewalk'>
          <img src='https://images.unsplash.com/photo-1596241913274-fd9f65e3a2b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='산책'/>
        </figure>
        <p>✨그늘·벤치·피크닉 스팟과 보관·분리배출 팁✨</p>
        <div className='walkTips'>
          <figure className='t1'><img src='https://cdn-icons-png.flaticon.com/128/6608/6608248.png' alt='팁1'/></figure>
          <figure className='t2'><img src='https://cdn-icons-png.flaticon.com/128/3361/3361928.png' alt='팁2'/></figure>
          <figure className='t3'><img src='https://cdn-icons-png.flaticon.com/128/4591/4591047.png' alt='팁3'/></figure>
          <div className='tipDesc'>
          <div >💚먹은 뒤 남은 음식물·일회용품은 밀봉해 가방에 담아 가져가세요. 잔디에는 부스러기 한 톨도 남기지 않는 게 매너!</div>
            <div >💚벤치 밑·등받이 뒤까지 한 번 훑어 휴지, 영수증, 병뚜껑을 챙깁니다.</div>
          <div >💚플라스틱·캔·종이는 내용물 비우고 라벨 제거 후 분류함에, 음식물·기타 쓰레기는 일반/음식물 통에!</div>
          </div>
        </div>
        
      </div>
    </TabPanel>
    <TabPanel>
      <div class="list">
        <h2>도심 러닝 루트 & 페이스 플랜</h2>
        <figure className='running'>
          <img src='https://images.unsplash.com/photo-1584412182057-c4c8a22ff533?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='러닝루트'/>
        </figure>
        <p>✨경사·조명·보행량 기준 코스 추천✨</p>
        <div className='runInfo'>
          <ul>
            <li>
            <p className='ping'>⚾ 화곡동 한누리공원</p>
              <ul>
                <li>수요일부터 이어진 비가 금요일까지 내릴것으로 예상되므로 공원에서 달리기는 적합하지 않습니다.</li>
              </ul>
            </li>
            <li>
            <p className='ping'>🏀 와동동 꺽새울공원</p>
              <ul>
                <li>공원을 가로지르는 중심 코스를 지나 반시계방향으로 달리는 것을 추천합니다.</li>
              </ul>
            </li>
            <li>
            <p className='ping'>⚽ 아동동 오름빛공원</p>
              <ul>
                <li>갈수록 오르막길이 생기는 구조이므로 입구부터 천천히 달리기를 추천합니다.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div class="list">
        <h2>멍때림 스테이션</h2>
        <figure className='rest'>
          <img src='https://images.unsplash.com/photo-1729155408920-20029e94e183?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='휴식'/>
        </figure>
        <p>✨소음·그늘·쉼터와 3분 호흡·스트레칭 루틴✨</p>
        <div className='restInfo'>
          <ul>
            <li>1. 그늘 찾기</li>
            <li>2. 더울땐 생수❌, 이온음료⭕</li>
            <li>3. 4-4-6 호흡하기</li>
          </ul>
        </div>
      </div>
    </TabPanel>
  </Tabs>

    </div>
  )
}

export default Tips
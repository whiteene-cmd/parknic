import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
  const {id} =useParams(); //URL에서 id추출
  const [item, setitem] = useState(null);
  useEffect(()=>{
      fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then(r=>r.json()) //json형태로 데이터 변환
      .then((data)=> {
        const found = data.items.find((m)=> m.id === parseInt(id))
        setitem(found)
      }) //json에서 title로 되어있는 애들만 뽑아줘.
      .catch(console.error);
    }, [id]) //id가 바뀔때마다 실행.

    if (!item) return <p>데이터를 불러오는 중...❣</p>
  return (
    <section>
      <div className='card cardDetail'>
          <img src={item.imageUrl} alt={item.title}/>
          <div className='recom-text'>
              <h3>{item.title}</h3>
              <div className='info'>
                  <span className="category">{item.category}</span>
                  <span className="tag">#{item.tags.join("#")} </span>
              </div>
              <p className='text'>{item.description}</p>
          </div>
      </div>
    </section>
  )
}

export default AboutDetail
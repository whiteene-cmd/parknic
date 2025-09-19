import React from 'react'
import mywalkMovie from '../assets/mywalk_mov.mp4'
const Mywalk = () => {
  return (
    <div className='mywalkWrap'>
      <div className='mywalkMov'>
        <video src={mywalkMovie} autoPlay loop muted preload='auto' playsInline></video>
      </div>
    <section className='contents'>
      
    </section>
    </div>
  )
}

export default Mywalk
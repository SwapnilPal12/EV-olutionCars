
import arrow_btn from "../../src/assets/arrow_btn - Copy.png"
import play_icon from "../assets/play_icon - Copy.png"
import pause_icon from "../../src/assets/pause_icon - Copy.png"
import "./Hero.css"
const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img src={playStatus?pause_icon:play_icon} alt="" onClick={()=>setPlayStatus(!playStatus)} />

        </div>
      </div>
    </div>
  )
}

export default Hero

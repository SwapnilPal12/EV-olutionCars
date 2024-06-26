import React from 'react'
import "./Background.css"
import video1 from "../../src/assets/video1 - Copy.mp4"
import image1 from "../../src/assets/image1 - Copy.png"
import image2 from "../../src/assets/image2 - Copy.png"
import image3 from "../../src/assets/image3 - Copy.png"
const Background = ({playStatus, heroCount}) => {
  if(playStatus){
    return (
      <video className='background fadeIn' autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    )
  }
  else if(heroCount === 0){
    return (
      <img src={image1} className="background" alt="background" />
    )
  }
  else if(heroCount === 1){
    return (
      <img src={image2} className="background" alt="background" />
    )
  }
  else if(heroCount === 2){
    return (
      <img src={image3} className="background" alt="background" />
    )
  }
}

export default Background

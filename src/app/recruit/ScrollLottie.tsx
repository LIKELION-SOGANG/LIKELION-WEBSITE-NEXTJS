import React from 'react'
import Lottie from 'lottie-react'
import ScrollAnimation from '../../../public/lottie/animation.json'

const ScrollLottie = () => {
  return (
    <Lottie
      animationData={ScrollAnimation}
      loop={true}
    />
  )
}

export default ScrollLottie

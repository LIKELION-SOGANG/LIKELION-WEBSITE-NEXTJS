import React from 'react'
import Lottie from 'lottie-react'
import ScrollAnimationInDesktop from '../../../../public/lottie/animationDesktop.json'
import ScrollAnimationInMobile from '../../../../public/lottie/animationMobile.json'

const ScrollLottie = () => {
  return (
    <div>
      <Lottie
        className="max-tablet:hidden"
        animationData={ScrollAnimationInDesktop}
        loop={true}
      />
      <Lottie
        className="tablet:hidden"
        animationData={ScrollAnimationInMobile}
        loop={true}
      />
    </div>
  )
}

export default ScrollLottie

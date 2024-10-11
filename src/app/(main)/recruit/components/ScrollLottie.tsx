import ScrollAnimationInDesktop from '@/../public/lottie/animationDesktop.json'
import ScrollAnimationInMobile from '@/../public/lottie/animationMobile.json'
import dynamic from 'next/dynamic'

//
//
//

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

//
//
//

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

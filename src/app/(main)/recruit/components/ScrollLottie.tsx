'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import animationData from '@/../public/lottie/animation.json'

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false })

//
//
//

export default function ScrollLottie() {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        play
        style={{ width: 50, height: 130 }}
      />
    </div>
  )
}

'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import animationData from '@/../public/lottie/animation.json'

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

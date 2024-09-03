import React from 'react'
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import animation from '../../../public/lottie/animation.json'
import FirstSection from './container/FirstSection'
import SecondSection from './container/SecondSection'
import ApplySection from './container/ApplySection'

export default function RecruitPage() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ApplySection />
    </div>
  )
}

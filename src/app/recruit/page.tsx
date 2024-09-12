import React from 'react'
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import animation from '../../../public/lottie/animation.json'
import ApplySection from './apply/container/ApplySection'
import EditPersonalInfo from './apply/container/EditPersonalInfo'
import CheckingPass from './apply/CheckingPass'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'

export default function RecruitPage() {
  return (
    <div>
      <Recruit1 />
      <Recruit2 />
    </div>
  )
}

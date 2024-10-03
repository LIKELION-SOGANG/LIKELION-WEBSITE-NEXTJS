import React from 'react'
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import animation from '../../../public/lottie/animation.json'
import ApplySection from './apply/container/ApplySection'
import EditPersonalInfo from './apply/container/EditPersonalInfo'
import CheckingPass from './apply/components/CheckingPass'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import { PAGE } from '@/style/zIndex'

export default function RecruitPage() {
  return (
    <main className={`relative z-[${PAGE}]`}>
      <Recruit1 />
      <Recruit2 />
    </main>
  )
}

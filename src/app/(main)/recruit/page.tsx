import React from 'react'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import { PAGE } from '@/style/zIndex'
//
//
//
export default function RecruitPage() {
  return (
    <main className={`relative z-[${PAGE}]`}>
      <Recruit1 />
      <Recruit2 />
    </main>
  )
}

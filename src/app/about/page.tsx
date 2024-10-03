import React from 'react'
import Onboard2 from './container/Onboard2'
import Onboard3 from './container/Onboard3'
import Onboard4 from './container/Onboard4'
import Onboard5 from './container/Onboard5'
import Onboard1 from './container/Onboard1'
import { PAGE } from '@/style/zIndex'

export default function AboutPage() {
  return (
    <main className={`relative z-[${PAGE}]`}>
      <Onboard1 />
      <Onboard2 />
      <Onboard3 />
      <Onboard4 />
      <Onboard5 />
    </main>
  )
}

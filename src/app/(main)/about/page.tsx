import React from 'react'
import Onboard2 from './container/Onboard2'
import Onboard3 from './container/Onboard3'
import Onboard4 from './container/Onboard4'
import Onboard5 from './container/Onboard5'
import Onboard1 from './container/Onboard1'
import { PAGE } from '@/style/zIndex'
import { Metadata } from 'next'
//
//
//
export const metadata: Metadata = {
  title: 'About · 서강대 멋사',
  description:
    '서강대학교 멋쟁이사자처럼의 역사, 수상내역, 알럼나이 아웃풋, 타임라인에 대해 소개합니다. 정기 교육 세션인 Lion Sprint에서 배우는 기술 스택들을 소개합니다. '
}
//
//
//
export default function AboutPage() {
  return (
    <main
      className={`relative`}
      style={{ zIndex: PAGE }}>
      <Onboard1 />
      <Onboard2 />
      <Onboard3 />
      <Onboard4 />
      <Onboard5 />
    </main>
  )
}

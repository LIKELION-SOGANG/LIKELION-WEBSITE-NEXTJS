import React from 'react'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import { PAGE } from '@/style/zIndex'
import { Metadata } from 'next'
//
//
//
export const metadata: Metadata = {
  title: '리크루트 정보 · 서강대 멋사',
  description: '서강대학교 멋쟁이사자처럼 지원하기, 리크루팅 정보 페이지입니다.'
}
//
//
//
export default function RecruitPage() {
  return (
    <main
      className={`relative`}
      style={{ zIndex: PAGE }}>
      <Recruit1 />
      <Recruit2 />
    </main>
  )
}

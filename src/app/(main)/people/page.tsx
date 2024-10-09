import React from 'react'
import People1 from './container/People1'
import People2 from './container/People2'
import { getAllMembers } from '@/client-api/api'
import { PAGE } from '@/style/zIndex'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our people · 서강대 멋사',
  description: '서강대학교 멋쟁이사자처럼 역대 기수별 아기사자, 운영진들'
}

export default async function PeoplePage() {
  const data = await getAllMembers()
  return (
    <main
      className={`relative`}
      style={{ zIndex: PAGE }}>
      <People1 />
      <People2 Members={data} />
    </main>
  )
}

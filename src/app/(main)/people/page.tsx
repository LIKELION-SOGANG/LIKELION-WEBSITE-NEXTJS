import React from 'react'
import People1 from './container/People1'
import People2 from './container/People2'
import { getAllMembers } from '@/client-api/api'
import { PAGE } from '@/style/zIndex'

export default async function PeoplePage() {
  const data = await getAllMembers()
  return (
    <main className={`relative z-[${PAGE}]`}>
      <People1 />
      <People2 Members={data} />
    </main>
  )
}

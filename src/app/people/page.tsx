import React from 'react'
import People1 from './container/People1'
import People2 from './container/People2'
import { getAllMembers } from '@/client-api/api'

export default async function PeoplePage() {
  const data = await getAllMembers()

  return (
    <main>
      <People1 />
      <People2 Members={data} />
    </main>
  )
}

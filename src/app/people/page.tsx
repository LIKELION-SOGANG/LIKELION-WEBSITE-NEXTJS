import React from 'react'
import People1 from './container/People1'
import People2 from './container/People2'

export default async function PeoplePage() {
  let data = await fetch('http://localhost:3001/api/people')
  return (
    <main>
      <People1 />
      <People2 />
    </main>
  )
}

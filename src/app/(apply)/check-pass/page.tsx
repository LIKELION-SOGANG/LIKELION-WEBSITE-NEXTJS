import React from 'react'
import Nonpassed from './container/Nonpassed'
import Passed from './container/Passed'

export default function CheckPassPage() {
  return (
    <main>
      <Nonpassed />
      <Passed />
    </main>
  )
}

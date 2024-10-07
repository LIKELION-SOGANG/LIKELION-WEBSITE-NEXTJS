import React from 'react'
import Contact1 from './container/Contact1'
import Contact2 from './container/Contact2'
import { PAGE } from '@/style/zIndex'

export default function ContactPage() {
  return (
    <main
      className={`relative`}
      style={{ zIndex: PAGE }}>
      <div className="bg-white">
        <Contact1 />
        <Contact2 />
      </div>
    </main>
  )
}

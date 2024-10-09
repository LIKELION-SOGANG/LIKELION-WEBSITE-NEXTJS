import React from 'react'
import Contact1 from './container/Contact1'
import Contact2 from './container/Contact2'
import { PAGE } from '@/style/zIndex'
import { Metadata } from 'next'
//
//
//
export const metadata: Metadata = {
  title: 'Connection · 서강대 멋사',
  description:
    '서강대학교 멋쟁이사자처럼과 Connect하세요. Instaram:@likelion_sg, Github:likelionsg, email:likelion_sg@gmail.com'
}
//
//
//
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

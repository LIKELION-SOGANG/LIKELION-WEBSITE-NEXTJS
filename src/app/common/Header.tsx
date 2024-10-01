'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function Header() {
  const [isShowHeader, setIsShowHeader] = useState(true) // 헤더 표시 여부
  const [lastScrollY, setLastScrollY] = useState(0) // 마지막 스크롤 위치

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY) {
          setIsShowHeader(false)
        } else {
          setIsShowHeader(true)
        }
        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [lastScrollY])

  return (
    <header
      className={`text-white mix-blend-difference w-full flex fixed top-0 p-[2.5rem] z-[999] transition-transform duration-500 ${
        isShowHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="font-pp cursor-pointer text-HeaderPC">
        Like<span className="italic">lion</span> So
        <span className="italic">gang</span>
      </div>
      <nav className="flex gap-[1.5rem] ml-auto">
        <Link
          href={'/about'}
          className="font-pp italic text-HeaderPC p-[0.5rem]">
          About
        </Link>
        <Link
          href={'/project'}
          className="font-pp italic text-HeaderPC p-[0.5rem]">
          Project
        </Link>
        <Link
          href={'/people'}
          className="font-pp italic text-HeaderPC p-[0.5rem]">
          People
        </Link>
        <Link
          href={'/recruit'}
          className="font-pp italic text-HeaderPC p-[0.5rem]">
          Recruit
        </Link>
        <Link
          href={'/contact'}
          className="font-pp italic text-HeaderPC p-[0.5rem]">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header

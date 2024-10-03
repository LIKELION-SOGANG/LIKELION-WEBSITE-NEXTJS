'use client'
import { HEADER } from '@/style/zIndex'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function Header() {
  const [isShowHeader, setIsShowHeader] = useState(true) // 헤더 표시 여부
  const [lastScrollY, setLastScrollY] = useState(0) // 마지막 스크롤 위치
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

  const handleMobileMenuClick = () => {
    setIsShowMobileMenu(true)
  }

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
    <>
      <header
        className={`text-white mix-blend-difference w-full flex fixed top-0 p-[2.5rem] z-${HEADER} transition-transform duration-500 ${
          isShowHeader ? 'translate-y-0' : '-translate-y-full'
        }`}>
        <div className="font-pp cursor-pointer text-HeaderPC">
          Like<span className="italic">lion</span> So
          <span className="italic">gang</span>
        </div>
        <nav className="ml-auto hidden tablet:flex gap-[1.5rem]">
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
        {/* 모바일 */}
        {/* 햄버거 버튼 */}
        <button className="block ml-auto tablet:hidden">
          <Image
            src={'/icon/button/hamburger-white.svg'}
            width={20}
            height={20}
            alt="메뉴 버튼"
            onClick={handleMobileMenuClick}
          />
        </button>
      </header>
      {/* 메뉴 리스트 */}
      {isShowMobileMenu && (
        <section
          className={`fixed top-0 left-0 w-full h-[100vh] bg-black z-${HEADER} transform transition-transform duration-500 ${
            isShowMobileMenu ? 'translate-y-0' : '-translate-y-full'
          }`}></section>
      )}
    </>
  )
}

export default Header

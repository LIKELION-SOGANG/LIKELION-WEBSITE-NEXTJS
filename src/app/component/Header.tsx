'use client'
import { HEADER, MOBILE_MENU_LIST } from '@/style/zIndex'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

//
//
//

export default function Header() {
  const [isShowHeader, setIsShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)

  const handleMobileHamburgerClick = () => {
    setIsShowMobileMenu(true)
  }

  const handleMobileCloseMenuClick = () => {
    setIsShowMobileMenu(false)
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
        className={`text-white mix-blend-difference w-full flex fixed top-0 p-[2.5rem] transition-transform duration-500 ${
          isShowHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: HEADER }}>
        <div className="font-pp cursor-pointer text-HeaderPC">
          <Link href="/">
            Like<span className="italic">lion</span> So
            <span className="italic">gang</span>
          </Link>
        </div>
        <nav className="ml-auto hidden tablet:flex gap-[1.5rem]">
          <Link
            href={'/about'}
            onClick={() => {
              setIsShowMobileMenu(false)
            }}
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
        <button
          className="block ml-auto tablet:hidden py-[1rem] pl-[1rem] "
          onClick={handleMobileHamburgerClick}>
          <Image
            src={'/icon/button/hamburger-white.svg'}
            width={20}
            height={20}
            alt="메뉴 버튼"
          />
        </button>
      </header>
      {/* 모바일 메뉴 리스트 - on/off*/}
      <section
        className={`fixed top-0 w-full h-[100vh] bg-black pt-[5rem] transform transition-transform duration-500 ${
          isShowMobileMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: MOBILE_MENU_LIST }}>
        <button
          onClick={handleMobileCloseMenuClick}
          className="absolute top-[2rem] right-[1.5rem] p-[1rem]">
          <Image
            src={'/icon/button/closeX-white.svg'}
            width={25}
            height={25}
            alt="메뉴 닫기 버튼"
          />
        </button>
        <nav>
          <ul className="font-pp text-[3.2rem] font-[300]">
            <Link
              href="/about"
              className="px-[3rem] py-[1.1rem] block border-b border-white">
              About
            </Link>
            <Link
              href="/people"
              className="px-[3rem] py-[1.1rem] block border-b border-white">
              People
            </Link>
            <Link
              href="/project "
              className="px-[3rem] py-[1.1rem] block border-b border-white">
              Project
            </Link>
            <Link
              href="/recruit"
              className="px-[3rem] py-[1.1rem] block border-b border-white">
              Recruit
            </Link>
            <Link
              href="/contact"
              className="px-[3rem] py-[1.1rem] block border-b border-white">
              Contact
            </Link>
          </ul>
        </nav>
      </section>
    </>
  )
}

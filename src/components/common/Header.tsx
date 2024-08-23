'use client'
import Link from 'next/link'
import React from 'react'
function Header() {
  return (
    <header className="w-full bg-black flex fixed top-0 p-[2.5rem]">
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

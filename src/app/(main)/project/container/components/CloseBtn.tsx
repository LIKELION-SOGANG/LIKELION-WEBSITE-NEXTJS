'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLockBodyScroll } from 'react-use'

export default function CloseBtn() {
  useLockBodyScroll()
  return (
    <Link
      href={'/project'}
      scroll={false}
      className="absolute top-[18px] right-[18px]">
      <Image
        src="/icon/button/closeX-black.svg"
        className="relative z-[1000]"
        alt="Link icon"
        width={'30'}
        height={'30'}
      />
    </Link>
  )
}

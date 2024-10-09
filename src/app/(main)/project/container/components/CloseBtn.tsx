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
      className="absolute top-[15px] right-[30px]">
      <Image
        src="/icon/button/closeX-black.svg"
        className="relative z-[1000]"
        alt="Link icon"
        width={'40'}
        height={'40'}
      />
    </Link>
  )
}

import { FOOTER } from '@/style/zIndex'
import Link from 'next/link'
import React from 'react'

//
//
//

export default function Footer() {
  return (
    <footer
      className="w-full px-[2.5rem] py-[1.45rem] flex justify-between font-pp text-[1.5rem] relative"
      style={{ zIndex: FOOTER }}>
      <section className="flex gap-[2.5rem] items-center">
        <div>
          <p>Instagram.</p>
          <p>@likelion_sg</p>
        </div>
        <div>
          <p>Email</p>
          <p>likelion_sg@gmail.com</p>
        </div>
      </section>
      <section>
        <div>
          <p className="text-right underline">
            <Link href={'/credit'}>↖︎ Credits</Link>
          </p>
          <p>© Likelion Sogang. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  )
}

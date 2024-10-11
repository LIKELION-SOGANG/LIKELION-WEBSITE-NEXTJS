import type { Metadata } from 'next'
import '@/style/globals.css'
import { Figtree, Pp, Pretendard } from '@/utils/Font'
import ApplyHeader from './apply/components/ApplyHeader'
//
//
//
export const metadata: Metadata = {
  title: 'Apply · 서강대 멋사',
  description: '서강대학교 멋쟁이사자처럼에 지원하기 페이지입니다.'
}
//
//
//
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="kr"
      className={`${Figtree.variable} ${Pp.variable} ${Pretendard.variable} `}>
      <body
        className={`${Figtree.className} ${Pp.className} ${Pretendard.className}`}>
        <section className="pt-[2rem] bg-white text-black h-screen">
          <div className="flex flex-col justify-center items-center bg-white">
            <div className="w-[56.2rem] ">
              <ApplyHeader />
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}

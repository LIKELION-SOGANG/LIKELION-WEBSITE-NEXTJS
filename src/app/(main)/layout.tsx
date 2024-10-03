import type { Metadata } from 'next'
import '@/style/globals.css'
import { Figtree, Pp, Pretendard } from '@/utils/Font'
import Header from '../component/Header'
//
//
//
export const metadata: Metadata = {
  title: '서강대학교 멋쟁이사자처럼 공식홈페이지',
  description: '서강대학교 멋쟁이사자처럼의 공식 홈페이지입니다.'
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
      className={`${Figtree.variable} ${Pp.variable} ${Pretendard.variable}`}>
      <body
        className={`${Figtree.className} ${Pp.className} ${Pretendard.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

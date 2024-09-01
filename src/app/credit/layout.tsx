import type { Metadata } from 'next'
import '@/style/globals.css'
import { Figtree, Pp, Pretendard } from '@/utils/Font'
//
//
//
// Credit은 독자적인 레이아웃이므로.. (공통헤더 필요X, layout.tsx 따로 생성)
export const metadata: Metadata = {
  title: '서강대학교 멋쟁이사자처럼 공식홈페이지 Credits',
  description: '서강대학교 멋쟁이사자처럼의 공식 홈페이지의 Credits 입니다.'
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
        {children}
      </body>
    </html>
  )
}

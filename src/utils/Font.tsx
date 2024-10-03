import localFont from 'next/font/local'

export const Figtree = localFont({
  variable: '--font-figtree',
  src: [
    {
      path: '../../public/font/Figtree-Black.ttf', // 상대 경로로 수정
      weight: '800'
    },
    {
      path: '../../public/font/Figtree-ExtraBold.ttf',
      weight: '700'
    },
    {
      path: '../../public/font/Figtree-Bold.ttf',
      weight: '600'
    },
    {
      path: '../../public/font/Figtree-Regular.ttf',
      weight: '500'
    },
    {
      path: '../../public/font/Figtree-Medium.ttf',
      weight: '400'
    },
    {
      path: '../../public/font/Figtree-Light.ttf',
      weight: '300'
    }
  ]
})

export const Pp = localFont({
  variable: '--font-pp',
  src: [
    {
      path: '../../public/font/pp-ultra-light.otf',
      weight: '300'
    },
    {
      path: '../../public/font/pp-ultra-lightitalic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/font/pp-regular.otf',
      weight: '400'
    },
    {
      path: '../../public/font/pp-italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/font/pp-ultra-bold.otf',
      weight: '500'
    },
    {
      path: '../../public/font/pp-ultra-bolditalic.otf',
      weight: '500',
      style: 'italic'
    }
  ]
})

export const Pretendard = localFont({
  variable: '--font-pretendard',
  src: [
    {
      path: '../../public/font/Pretendard-Bold.woff',
      weight: '600'
    },
    {
      path: '../../public/font/Pretendard-Medium.woff',
      weight: '500'
    },
    {
      path: '../../public/font/Pretendard-Regular.woff',
      weight: '400'
    },
    {
      path: '../../public/font/Pretendard-ExtraLight.woff2',
      weight: '200'
    }
  ]
})

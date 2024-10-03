import Image from 'next/image'
import Link from 'next/link'

export default function CloseBtn() {
  return (
    <Link
      href={'/project'}
      scroll={false}>
      <Image
        src="/icon/button/closeX-black.svg"
        alt="Link icon"
        width={'20'}
        height={'20'}
        className="absolute tablet:right-[18px] right-[30px] tablet:top-[18px] top-[53px] tablet:w-[30px] tablet:h-[30px] cursor-pointer"
      />
    </Link>
  )
}

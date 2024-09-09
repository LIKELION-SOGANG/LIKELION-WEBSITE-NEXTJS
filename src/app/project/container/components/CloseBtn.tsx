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
        width={'30'}
        height={'30'}
        className="absolute right-[18px] top-[18px] cursor-pointer"
      />
    </Link>
  )
}

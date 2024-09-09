import Image from 'next/image'
import Link from 'next/link'

export default function LinkBtn({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="rounded-2xl border border-solid border-[rgba(0,0,0,0.25)] px-[236px] py-[12px]  text-[20px] flex items-center justify-between w-[537px] absolute bottom-[34px]">
      <Image
        src="/icon/button/link.svg"
        alt="Link icon"
        width={'20'}
        height={'40'}
        className="mr-auto"
      />
      Link
    </Link>
  )
}

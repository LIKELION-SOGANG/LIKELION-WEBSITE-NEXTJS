import Image from 'next/image'
import Onboard1 from './about/Onboard1'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Onboard1 />
    </main>
  )
}

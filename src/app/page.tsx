import { PAGE } from '@/style/zIndex'
import Onboard1 from './about/container/Onboard1'
import Onboard2 from './about/container/Onboard2'
import Onboard3 from './about/container/Onboard3'
import Onboard4 from './about/container/Onboard4'
import Onboard5 from './about/container/Onboard5'

export default function HomePage() {
  return (
    <main className={`relative z-[${PAGE}]`}>
      <Onboard1 />
      <Onboard2 />
      <Onboard3 />
      <Onboard4 />
      <Onboard5 />
    </main>
  )
}

import { PROJECT_MODAL } from '@/style/zIndex'

export default function ModalLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section style={{ position: 'relative', zIndex: PROJECT_MODAL }}>
      <div className="tablet:block hidden">
        <div className="fixed left-0 top-0 opacity-30 bg-black w-screen h-screen "></div>
      </div>
      <div className="tablet:fixed tablet:top-[5%] tablet:left-1/2 tablet:-translate-x-1/2 tablet:w-[600px] tablet:h-[90vh] tablet:drop-shadow-[0px_4px_100px_rgba(0,0,0,0.50)] tablet:backdrop-blur-xl tablet:rounded-3xl bg-white flex flex-col text-black px-[30px] tablet:pt-[90px] pt-[108px] pb-[30px]  font-figtree fixed top-0 left-0 w-screen h-screen overflow-y-auto">
        {children}
      </div>
    </section>
  )
}

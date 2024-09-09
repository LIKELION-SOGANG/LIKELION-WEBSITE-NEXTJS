export default function TapBtn({
  text,
  isSelected
}: {
  text: string
  isSelected: boolean
}) {
  return (
    <div
      className={`border border-white rounded-2xl px-4 pt-[14px] pb-[8px] font-pp text-[24px] italic leading-[0.6] font-normal cursor-pointer hover:bg-white hover:text-black hover:mix-blend-screen transition-color duration-200 ease-in-out ${isSelected ? 'bg-white text-black mix-blend-screen' : 'bg-transparent'}`}>
      {text}
    </div>
  )
}

import ReactDOM from 'react-dom'
//
//
//
export default function ModalPortal({
  children
}: {
  children: React.ReactNode
}) {
  const el = document.getElementById('modal') as Element
  return ReactDOM.createPortal(children, el)
}

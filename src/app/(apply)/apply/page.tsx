import ApplySection from './container/ApplySection'
import EditPersonalInfo from './container/EditPersonalInfo'
import SaveComplete from './container/SaveComplete'

//
//
//

export default function ApplyPage() {
  return (
    <main>
      <ApplySection />
      <SaveComplete />
      <EditPersonalInfo />
    </main>
  )
}

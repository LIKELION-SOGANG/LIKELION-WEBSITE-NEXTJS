import React from 'react'
import ApplySection from './container/ApplySection'
import EditPersonalInfo from './container/EditPersonalInfo'
import PersonalInformationForm from './container/PersonalInformationForm'
import PersonalStatementForm from './container/PersonalStatementForm'
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

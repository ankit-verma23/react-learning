import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content(props) {
  return (
    <div className='py-4 flex items-center gap-10 h-[90vh] px-8'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content

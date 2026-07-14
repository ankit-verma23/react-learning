import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div id='right' className='h-full flex flex-nowrap rounded-4xl overflow-x-auto gap-5 p-4 w-2/3'>
      {
        props.users.map((elem, idx) => {
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })
      }
    </div>
  )
}

export default RightContent

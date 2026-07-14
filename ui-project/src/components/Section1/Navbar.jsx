import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-2 px-10'>
      <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full text-xs'>Target Audience</h4>
      <button className='bg-gray-200 px-4 py-2 uppercase rounded-full tracking-widest text-xs'>Digital Banking Platform</button> 
    </div>
  )
}

export default Navbar

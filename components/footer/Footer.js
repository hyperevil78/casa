import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='w-full h-[65vh] bg-black'>
        <div className='flex h-11/12'>
          <div className='left flex justify-center items-center text-white w-1/2 border border-red-600 flex-col '>
            <div id='name' className='pb-15'>
              Casa Lumière
            </div>
            <div className='flex gap-10'>
              {/* here need to add icons of the social media platform */}
              <div>insta</div>
              <div>twitter</div>
              <div>Youtube</div>
              <div>phone</div>
              <div>address</div>
            </div>
           
          </div>
          <div className='text-white w-1/2 border border-red-600'>
            right
          </div>

        </div>
          <div className='text-center text-[#8d8d8d]'>
            © 2025 Casa Lumière. All Rights Reserved.
          </div>
      </div>
    </footer>
  )
}

export default Footer

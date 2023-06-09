import React from 'react'
import MenuBar from './MenuBar'

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className='bg-[#13A7E1] w-full h-28'>
          <div className="container flex items-center justify-evenly">
            <div>
              <h1 className='text-white p-4  text-lg font-semibold'>Toll-Free:844-902-4242</h1>
            </div>
            <div>
              <h1 className='text-[#380523] text-xs font-semibold'>Because life happens on the yard and in the classroom™ </h1>
            </div>
            <div>
              <div className='flex justify-between items-center gap-10'>
                <div className='flex gap-2'>
                  <div className='w-4 h-4'>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m25.87 5a3 3 0 0 0 -1.1.53c-.5.38-7.81 7.75-8.18 8.24a7.59 7.59 0 0 0 -1.51 4.35c0 .46 0 .54.11.72a1 1 0 0 0 .31.34c.19.13.21.14.88.13a7.26 7.26 0 0 0 4.54-1.71c.18-.14 2.07-2 4.2-4.15 3.76-3.77 3.89-3.9 4.06-4.26a2.95 2.95 0 0 0 -1.64-4.1 3.52 3.52 0 0 0 -1.67-.09zm1.13 2a1 1 0 0 1 .45 1.26c-.13.27-7.75 7.87-8.19 8.16a6.51 6.51 0 0 1 -2 .86c-.2 0-.2 0 0-.54a6.22 6.22 0 0 1 .8-1.64c.27-.39 7.8-8 8.05-8.09a1.08 1.08 0 0 1 .89-.01z" fill="#f25c05" stroke="#000" stroke-miterlimit="10"></path><path d="m9 13.52a1 1 0 0 0 -.58 1.33 1 1 0 0 0 .51.49 23 23 0 0 0 3.71 0 1 1 0 0 0 0-1.78c-.14-.08-.34-.09-1.82-.1a8.31 8.31 0 0 0 -1.82.06z" fill="#f00"></path><path d="m9 17.44a1 1 0 0 0 -.58 1.33.91.91 0 0 0 .51.49 20.9 20.9 0 0 0 3.71 0 1 1 0 0 0 0-1.78 6.17 6.17 0 0 0 -1.82-.09 9.78 9.78 0 0 0 -1.82.05z" fill="#00f"></path><g fill="#808080"><path d="m9 21.1a1 1 0 0 0 -.58 1.33 1 1 0 0 0 .51.49 23 23 0 0 0 3.71 0 1 1 0 0 0 0-1.78c-.14-.08-.34-.09-1.82-.1a8.31 8.31 0 0 0 -1.82.06z"></path><path d="m14.58 21.1a1 1 0 0 0 -.58 1.33 1 1 0 0 0 .51.49 22.85 22.85 0 0 0 3.7 0 1 1 0 0 0 .05-1.78c-.14-.08-.34-.09-1.83-.1a8.25 8.25 0 0 0 -1.85.06z"></path><path d="m20 21.1a1 1 0 0 0 -.58 1.33 1 1 0 0 0 .51.49 22.85 22.85 0 0 0 3.7 0 1 1 0 0 0 .05-1.78c-.14-.08-.34-.09-1.83-.1a8.18 8.18 0 0 0 -1.85.06z"></path></g><path d="m7.78 8.51a5 5 0 0 0 -4 3.31c-.26.77-.26.67-.26 7.4 0 6 0 6.26.09 6.61a3 3 0 0 0 2.16 2.17 3.23 3.23 0 0 0 1.63-.09 4.48 4.48 0 0 0 1.6-1.12l.74-.67h5.44 5.43l.44-.14a4.91 4.91 0 0 0 3.44-3.49 6.29 6.29 0 0 0 .16-2c0-1.69 0-1.78-.27-2.09a.94.94 0 0 0 -1.4 0c-.27.28-.29.38-.29 1.85a6.86 6.86 0 0 1 -.09 1.71 3 3 0 0 1 -2 2.13c-.23.08-.69.09-5.88.11s-5.66 0-5.79.11-.55.44-1 .87a10.09 10.09 0 0 1 -1.07.82 1.06 1.06 0 0 1 -1.14-.2c-.27-.3-.26 0-.26-6.6s0-6.47.3-7.1a3 3 0 0 1 1.86-1.58c.25-.08.6-.09 4.81-.12h4.54l.2-.14a1 1 0 0 0 .41-1.07 1.18 1.18 0 0 0 -.67-.68c-.23-.06-8.64-.06-9.13-0z" fill="#b3b3b3"></path><path d="m8.67 7.62a4.92 4.92 0 0 0 -4 3.3c-.27.78-.26.67-.26 7.41 0 6 0 6.25.09 6.6a3 3 0 0 0 2.18 2.18 3.24 3.24 0 0 0 1.62-.11 4.39 4.39 0 0 0 1.62-1.13l.74-.67h5.44 5.44l.44-.13a5 5 0 0 0 3.44-3.5 6.81 6.81 0 0 0 .15-2c0-1.68 0-1.78-.27-2.08a.92.92 0 0 0 -1.39 0c-.27.27-.29.38-.29 1.84a6.8 6.8 0 0 1 -.09 1.67 3 3 0 0 1 -2 2.13c-.23.08-.69.09-5.89.12s-5.65 0-5.79.1-.54.44-1 .88-1 .83-1.07.89a1.05 1.05 0 0 1 -1.14-.21c-.28-.3-.26 0-.26-6.6s0-6.47.29-7.1a3 3 0 0 1 1.85-1.57c.25-.08.6-.09 4.81-.11h4.53l.21-.14a1 1 0 0 0 .4-1.07 1.1 1.1 0 0 0 -.66-.67c-.23-.1-8.64-.1-9.14-.03z"></path></svg></div>
                  <div>
                    <p className='text-[#54595f] text-xs font-semibold'>Articles</p></div>
                </div>
                <div className='flex gap-2 '>
                  <div className='w-4 h-4'>
                    <svg aria-hidden="true" class="e-font-icon-svg e-far-address-card" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path></svg></div>
                  <div>
                    <p className='text-[#54595f] text-xs font-semibold'>Contact</p></div>
                </div>
                <div className='flex gap-2'>
                  <div className='w-4 h-4'>
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-phone" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></div>
                  <div>
                    <p className='text-[#54595f] text-xs font-semibold'>Tap to call</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <img src="https://assets.kidsontheyard.com/wp-content/uploads/2022/01/21124014/koty-logo-510x100-2022-300x59.png.webp" alt="logo" />
          </div>
        </div>
      </header>
      <MenuBar />
    </React.Fragment >
  )
}

export default Header
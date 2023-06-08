import React, { useState } from 'react'

function MenuBar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <React.Fragment>
      <div className='bg-[#91D93F] w-full h-20 '>
        <div className="container flex  gap-10 justify-center items-center pt-6">
          <div className=''>
            <img src="https://assets.kidsontheyard.com/wp-content/uploads/2022/08/23115404/image-removebg-preview.png.webp" alt="home" width="30px" />
          </div>
          <div className="links">
            <ul className="flex gap-12">
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className=" relativetext-black flex  font-bold text-xs font-[montserrat,Sans-serif] hover:text-white">LEARNING SOLUTIONS &nbsp;  <span className='w-2 h-2'>
                  <svg class="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></li>
              {isHovered && (
                <ul className="absolute z-10 bg-white p-2 mt-2 rounded-lg shadow-lg">
                  <li className="text-black flex font-bold text-xs font-[montserrat,Sans-serif] hover:text-white">LEARNING SOLUTIONS &nbsp;<span className='w-2 h-2 '>
                  </span>
                  </li>
                </ul>
              )}
              <li className="text-black flex font-bold text-xs font-[montserrat,Sans-serif] hover:text-white">FOR PARTNER &nbsp;<span className='w-2 h-2 '>
                <svg class="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></li>
              <li className="text-black flex font-bold text-xs font-[montserrat,Sans-serif] hover:text-white">OUR PROGRAMS &nbsp;<span className='w-2 h-2'>
                <svg class="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></li>
              <li className="text-black flex font-bold text-xs font-[montserrat,Sans-serif] hover:text-white">SCHOOL DISTRICTS &nbsp;<span className='w-2 h-2 '>
                <svg class="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></li>
              <li className="text-black flex font-bold text-xs font-[montserrat,Sans-serif] hover:text-white">ABOUT US &nbsp;<span className='w-2 h-2 '>
                <svg class="e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg></span></li>
            </ul>

          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default MenuBar
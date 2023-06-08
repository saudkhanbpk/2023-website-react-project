import React from 'react'

function Home() {
  return (
    <React.Fragment>
      <div className="bg-[url('/src/assets/home.jpg')] w-full bg-center h-screen bg-cover">
        <div className='flex justify-center items-center h-screen '>
          <div className='bg-[#323e40] mt-96 w-3/5 ' style={{ borderRadius: "18px 18px 0px 0px", height: "30%" }}>
            <h2 className='text-white text-center text-2xl font-bold pt-8'>For Their Future, For Their Growth
            </h2>
            <h2 className='text-white text-center text-2xl font-bold font-[montserrat,Sans-serif]'>Inspiring Personal Growth!
            </h2>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-4 -mt-12'>
        <div className='bg-[#05AFF2] h-fit' style={{ width: "25%", borderRadius: "18px 18px 18px 18px", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
          <div>
            <h2 className='text-white text-center text-[22px] font-bold pt-2'>Get Started with 1 On 1 <br /> Tutoring</h2>
          </div>
          <div className='p-5 text-white font-medium text-[16px]'>
            <p>We inspire a growth mindset for struggling learners.
              <br />
              <br />
              For Students who are struggling with scores and confidence and have slipped behind. Personal One-On-One Live Learning</p>
          </div>
          <div className='text-center text-white font-medium text-[16px]'>
            <p>Competitive Monthly Packages
            </p>
          </div>
          <br />
          <div className='text-center'>
            <a href='#' className='text-[#05AFF2] bg-white rounded-full pt-1 pb-1  pl-3 pr-3 '>Learn More &gt;</a>
          </div>
          <br />
        </div>
        <div className='bg-[#71B029] h-fit' style={{ width: "25%", borderRadius: "18px 18px 18px 18px", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
          <div>
            <h2 className='text-white text-center text-[22px] font-bold pt-2'>Get Started with 1 On 1 <br /> Tutoring</h2>
          </div>
          <div className='p-5 text-white font-medium text-[16px]'>
            <p>We inspire a growth mindset for struggling learners.
              <br />
              <br />
              For Students who are struggling with scores and confidence and have slipped behind. Personal One-On-One Live Learning</p>
          </div>
          <div className='text-center text-white font-medium text-[16px]'>
            <p>Competitive Monthly Packages
            </p>
          </div>
          <br />
          <div className='text-center'>
            <a href='#' className='text-[#71B029] bg-white rounded-full pt-1 pb-1  pl-3 pr-3 '>Learn More &gt;</a>
          </div>
          <br />

        </div>
        <div className='bg-[#f2522e] h-fit' style={{ width: "25%", borderRadius: "18px 18px 18px 18px", boxShadow: "0 0 10px 0 rgba(0,0,0,.5)" }}>
          <div>
            <h2 className='text-white text-center text-[22px] font-bold pt-2'>Get Started with 1 On 1 <br /> Tutoring</h2>
          </div>
          <div className='p-5 text-white font-medium text-[16px]'>
            <p>We inspire a growth mindset for struggling learners.
              <br />
              <br />
              For Students who are struggling with scores and confidence and have slipped behind. Personal One-On-One Live Learning</p>
          </div>
          <div className='text-center text-white font-medium text-[16px]'>
            <p>Competitive Monthly Packages
            </p>
          </div>
          <br />
          <div className='text-center'>
            <a href='#' className='text-[#f2522e] bg-white rounded-full pt-1 pb-1  pl-3 pr-3 '>Learn More &gt;</a>
          </div>
          <br />
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
import React from 'react'
import Stuti from '../assets/Stuti.jpg'

const Page_4 = () => {
  return (
    <>
        <div className='h-[70vh] w-full mt-12'>
            <div className='w-full flex justify-center'>
                <h1 className='ml-5 text-2xl font-mono font-bold'>
                Recommendations
                </h1>
            </div>
            <div className='h-full w-full flex justify-around items-center md:flex-row flex-col'>
                <div className='h-3/5 w-4/12 bg-slate-100 flex flex-col justify-around'>
                   <div className='flex justify-around'>
                      <div className='flex'>
                        <img src={Stuti} className='w-20 rounded-full' alt="" />
                        <div className='flex flex-col ml-5'>
                            <h1>Stuti Yadav</h1>
                            <h3>Student</h3>
                        </div>
                      </div>
                      <div>
                        logo hoon mein
                      </div>
                   </div>
                   <div className='h-full'>
                     <p>
                        "I am really gratefull"
                     </p>
                   </div>
                </div>
                <div className='h-3/5 w-5/12 bg-slate-100'>

                </div>
            </div>


        </div>
    </>
  )
}

export default Page_4
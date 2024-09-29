import React from 'react'
import SS from '../assets/SS.png'
import Section_3 from './Section_3'

const FlowDiagram = () => {
  return (
    <div>
        <div className='flex justify-center text-2xl md:text-4xl font-mono font-bold mt-14'>
            Technical Flow Diagram
        </div>
        <div className='mt-12 flex justify-center'>
            <img src={SS} alt="" />
        </div>
        <div className='block md:hidden mt-10'>
          <div className='h w-full flex justify-center items-center'>
                <h1 className='font-bold text-gray-600 border-b-2 border-black w-10/12 justify-center flex text-xl md:text-lg'>YOU MAY ALSO LIKE</h1>
            </div>
            <div className='h-2/5 justify-start items-center flex flex-col mt-5'>
                <div className="card card-bordered border-black bg-slate-50 shadow-lg w-5/6 h-48 mt-5 ">
                  <div className="h-full w-full flex justify-center items-center flex-col gap-y-3">
                      <h2 className="card-title text-xl">PROJECT ARCHITECTUREE</h2>
                      <div className="card-actions justify-center mt-4">
                      <button onClick={() => handleClick('Diagram')} className=" btn btn-neutral">View Diagram</button>  
                      </div>
                    </div>
                  </div>
            </div>
            <div className='h-2/5 justify-start items-center flex flex-col'>
                <div className="card card-bordered border-black bg-slate-50 shadow-lg w-5/6 h-48 mt-5 ">
                  <div className="h-full w-full flex justify-center items-center flex-col gap-y-3">
                      <h2 className="card-title text-xl">PROJECT WEBSITE</h2>
                      <div className="card-actions justify-center mt-4">
                      <button className=" btn btn-neutral">Visit Website</button>  
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default FlowDiagram
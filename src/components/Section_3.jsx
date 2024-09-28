import React from 'react'
import { useNavigate } from 'react-router-dom';

const Section_3 = () => {
  const navigate = useNavigate();
 
    const handleClick = (page) => {
        navigate(`/${page}`)
    };

  return (
    <>
      <div className='w-2/6 h-3/5  hidden md:block bg-slate-50 rounded-3xl mr-2'>
           <div className='h-14 w-full flex justify-center items-center'>
              <h1 className='font-bold text-gray-600 border-b-2 border-black w-10/12 justify-center flex text-lg'>YOU MAY ALSO LIKE</h1>
           </div>
           <div className='h-2/5 justify-start items-center flex flex-col mt-5'>
              <div className="card card-bordered border-black bg-slate-50 shadow-lg w-5/6 h-3/4 mt-5 ">
                <div className="h-full w-full flex justify-center items-center flex-col gap-y-3">
                    <h2 className="card-title text-lg">PROJECT ARCHITECTURE</h2>
                    <div className="card-actions justify-center">
                    <button onClick={() => handleClick('Diagram')} className=" btn btn-neutral">View Diagram</button>  
                    </div>
                  </div>
                </div>
           </div>
           <div className='h-2/5 justify-start items-center flex flex-col'>
              <div className="card card-bordered border-black bg-slate-50 shadow-lg w-5/6 h-3/4 mt-5 ">
                <div className="h-full w-full flex justify-center items-center flex-col gap-y-3">
                    <h2 className="card-title text-lg">PROJECT WEBSITE</h2>
                    <div className="card-actions justify-center">
                    <button className=" btn btn-neutral">Visit Website</button>  
                    </div>
                  </div>
                </div>
           </div>
        </div>
    </>
  )
}

export default Section_3
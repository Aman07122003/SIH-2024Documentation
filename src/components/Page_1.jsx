import React from 'react';
import Navbar from './Navbar';
import Code from '../assets/Code.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Page_2 from './Page_2';
import Page_3 from './Page_3';
import FlowDiagram from './FlowDiagram'; 



const Page_1 = () => {
    const navigate = useNavigate();
 
    const handleClick = (page) => {
        navigate(`/${page}`)
    };

  return (
    <>
      <div className='min-h-screen w-full flex flex-col'>
        <Navbar/>
        <div className='flex flex-col md:flex-row items-center justify-between md:mt-54 mt-36 md:justify-center h-[83vh] w-full  md:mt-20 md:ml-5'>
            <div className='  h-full order-2 md:order-1 md:ml-2 md:w-2/3 flex justify-center items-center'>
               <div className='md:w-full  md:h-3/5 flex gap-y-5 flex-col justify-center items-center md:mt-7'>
                    <div className='flex items-start justify-start md:w-full mt-3 md:mt-0'>
                      <h1 className='text-3xl md:text-4xl font-bold md:font-extrabold font-mono'>TITLE PAGE</h1>
                    </div>
                    <div className='flex md:w-full  justify-start items-start mt-6 h-full'>
                      <div className='block md:hidden text-base w-full'>
                        <ul className="list-disc pl-5 w-full">
                            <li className='py-2'><span className='font-semibold'>Problem Statement ID -</span> 1762</li>
                            <li className='py-2'><span className='font-semibold'>A National Philatelic Platform</span></li>
                            <li className='py-2'><span className='font-semibold'>Ministry of Communication</span></li>
                            <li className='py-2'><span className='font-semibold'>Theme -</span> Transportation & Logistics</li>
                            <li className='py-2'><span className='font-semibold'>PS Category -</span> Software</li>
                            <li className='py-2'><span className='font-semibold'>Team ID -</span> 2523</li>
                            <li className='py-2'><span className='font-semibold'>Team Name -</span> "HexaBruteForce"</li>
                          </ul>
                      </div>

                      <div className='hidden md:block text-gray-700 text-base h-full '>
                        <ul className="list-disc pl-5">
                        <li className='py-2'><span className='font-semibold'>Problem Statement ID -</span> 1762</li>
                          <li className='py-2'><span className='font-semibold'>Problem Statement Title -</span> India Philately Hub: A National Philatelic Platform</li>
                          <li className='py-2'><span className='font-semibold'>Ministry/Organization Name -</span> Ministry of Communication</li>
                          <li className='py-2'><span className='font-semibold'>Theme -</span> Transportation & Logistics</li>
                          <li className='py-2'><span className='font-semibold'>PS Category -</span> Software</li>
                          <li className='py-2'><span className='font-semibold'>Team ID -</span> 2523</li>
                          <li className='py-2'><span className='font-semibold'>Team Name -</span> "HexaBruteForce"</li>
                        </ul>
                      </div>
                    </div>
                    <div className='h-16 w-full flex md:justify-start justify-center items-center md:gap-x-5 gap-x-3 mt-4'>
                        <div>
                          <button onClick={() => handleClick('PdfViewer')} className="bg-orange-100 hover:bg-orange-500 text-orange-500 hover:text-white rounded-2xl font-bold py-3 px-5 rounded">
                              See PPT
                          </button>
                          
                        </div>

                        <button onClick={() => handleClick('contact')} className="bg-green-100 hover:bg-green-500 text-green-600 hover:text-white rounded-2xl font-bold py-3 px-5 rounded">
                            Contact Us
                        </button>
                       
                    </div>
               </div>
            </div>
            <div className='md:full md:h-3/5 w-3/5 md:w order-1 md:order-2 flex justify-end items-center'>
                <img src={Code} alt="Ninja Character Image" className='rounded-2xl md:w-4/5' />
            </div>
            
        </div>
        <div className=' w-full flex justify-center items-start mt-24 md:mt-2'>
          <h1 className='text-2xl font-extrabold font-mono'>Featured Slides</h1>
        </div>
      </div>
      <div className='mt-10'>
       <Page_2/>
      </div>
      <div>
        <Page_3/>
      </div>
      <FlowDiagram/>
      <div className='h-20 w-full flex justify-center items-end'>
        <Footer/>
      </div>
      
    </>
  )
}

export default Page_1;

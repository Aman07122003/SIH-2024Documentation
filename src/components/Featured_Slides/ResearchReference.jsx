import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Section_3 from '../Section_3'
import Structure from '../Structure'

import Footer from '../Footer'
import Flowchart from '../../assets/Flowchart.png'

const ResearchReference = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <>
    <div className='h-screen w-full'>
      <div className='h-12'>
       <Navbar/>
      </div>
      <div className='mt-14 flex h-full w-full'>
        {/* Left Section */}
        <div className='flex md:flex-row flex-col w-full'>
          <div className='w-4/5 md:w-5/12 ml-10 md:ml-1'>
           <Structure/>
          </div>
          {/* Mid Section */}
          <div className='p-4 mt-10 md:ml-5 md:mt-0 w-full'>
            <header className='h-16  flex justify-center items-start md:text-3xl text-xl font-mono font-extrabold'>
              <h1>
                RESEARCH AND REFERENCE
              </h1>
            </header>
            <main className='w-full'>
            <div>
                <h1 className='text-xl font-bold text-gray-700 font-mono mt-4'>
                  Research Sources
                </h1>
                <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5 md:mt-5">
                    <span className='font-bold'>Philatelic Market Analysis: </span>
                    Examined challenges faced by philatelists, including limited access to information, geographic limitations, and demand-supply imbalances.
                    <span className='italic'> Source: </span> 
                    [1] M. Walker, <span className='italic'>The Global Philatelic Market, 3rd ed., London: Philately Press, 2019</span>.
                  </li>

                  <li className="mt-3 md:mt-5">
                    <span className='font-bold'>E-commerce and Community Platforms: </span>
                    Investigated community-building frameworks and secure online marketplaces to facilitate exchanges and sales.
                    <span className='italic'> Source: </span> 
                    [2] A. Sharma, <span className='italic'>"The Role of Online Communities in Niche Markets," Journal of E-Commerce Studies</span>, vol. 8, no. 4, pp. 45-62, 2020.
                  </li>

                  <li className="mt-3 md:mt-5">
                    <span className='font-bold'>AI in Collectibles Market: </span>
                    Utilized studies on AI-driven personalization and fraud detection in collectibles to propose AI integration in NPDA.
                    <span className='italic'> Source: </span>
                    [3] P. Kaur, <span className='italic'>"AI-Based Authentication in Collectible Markets," IEEE Transactions on Artificial Intelligence</span>, vol. 12, no. 2, pp. 27-34, 2021.
                  </li>

                  <li className="mt-3 md:mt-5">
                    <span className='font-bold'>Logistics and Distribution Solutions: </span>
                    Reviewed national logistics integration for efficient item distribution across remote regions.
                    <span className='italic'> Source: </span>
                    [4] S. Rao, <span className='italic'>"National Logistics Solutions for Online Retailers," Journal of Supply Chain and Logistics</span>, vol. 9, no. 1, pp. 101-114, 2019.
                  </li>
                </ul>
              </div>

              <div className='mt-10'>
                  <h1 className='text-xl font-bold text-gray-700 font-mono mt-4'>
                    Research Sources
                  </h1>
                  <ul className='list-disc ml-3 mr-3 text-sm'>
                    
                    <li className="mt-5 md:mt-5">
                      <span className='font-bold'>A. Sharma: </span>
                      "The Role of Online Communities in Niche Markets," 
                      <span className='italic'>Journal of E-Commerce Studies</span>, vol. 8, no. 4, pp. 45-62, 2020.
                    </li>
                    
                    <li className="mt-3 md:mt-5">
                      <span className='font-bold'>India Post Today: </span>
                      "India Post - Philately Informative Video," 
                      <span className='italic'>YouTube</span>, [online]. Available: 
                      <a href="https://youtu.be/9KhBjRVSsw0" className="text-blue-600 underline">https://youtu.be/9KhBjRVSsw0</a>. [Accessed: Sep. 6, 2024].
                    </li>
                    
                    <li className="mt-3 md:mt-5">
                      <span className='font-bold'>The Indian Express: </span>
                      "Philately is a hobby, not a business" India Post, 
                      <span className='italic'>Indian Express</span>, [online]. Available: 
                      <a href="https://indianexpress.com/article/lifestyle/art-and-culture/philately-why-people-love-collect-stamps-amritpex-india-post-8453269/" className="text-blue-600 underline">https://indianexpress.com/article/lifestyle/art-and-culture/philately-why-people-love-collect-stamps-amritpex-india-post-8453269/</a>. [Accessed: Sep. 6, 2024].
                    </li>
                    
                    <li className="mt-3 md:mt-5">
                      <span className='font-bold'>OpenAI's ChatGPT: </span>
                      “Discussion on creating a national philatelic community,” [AI-assisted conversation]. Available: ChatGPT interface, Sep. 2024.
                    </li>
                    
                  </ul>
                </div>

            </main>
          </div>
        </div>
        {/* Right Section */}
        <Section_3/>
      </div>
    </div>
   </>
  )
}

export default ResearchReference

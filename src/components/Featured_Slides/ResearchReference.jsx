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
            <header className='h-16  flex justify-center items-start text-3xl font-mono font-extrabold'>
              <h1>
                RESEARCH AND REFERENCE
              </h1>
            </header>
            <main className='w-full'>
              <div>
                  <h1 className='text-xl font-bold text-gray-700 font-mono  mt-4'>
                     Research Sources
                  </h1>
                  <ul className='list-disc ml-3 mr-3 text-sm'>
                      <li className="mt-5 md:mt-5">
                        <span className='font-bold'>Philatelic Market Analysis :- </span>
                        Philatelists across India, regardless of location, will have easier access to philatelic items and information that were previously limited to certain postal circles.
                      </li>
                      <li className="mt-3 md:mt-5">
                        <span className='font-bold'>Enhanced Community Engagement: </span>
                        A centralized platform will foster a more connected philatelic community, encouraging collaboration, trading, and participation in events.
                      </li>
                      <li className="mt-3 md:mt-5">
                        <span className='font-bold'>Simplified Collection Management: </span>
                        Tools like personalized recommendations, tracking collections, and managing preferences will streamline the hobby, making it more enjoyable and less time-consuming.
                      </li>
                      <li className="mt-3 md:mt-5">
                        <span className='font-bold'>Convenient Purchasing: </span>
                        The platform will offer a secure and efficient way to buy, sell, and trade stamps, eliminating geographical barriers and enhancing the overall experience for collectors.
                      </li>
                   </ul>

              </div>
              <div className='mt-10'>
                  <h1 className='text-xl font-mono font-bold text-gray-700'>
                       Benefits of the Solution :-
                  </h1>
                  <ul className='list-disc ml-3 mr-3'>
                        <li className="mt-5 md:mt-5 text-sm"><span className='font-bold'>Social Benefits:-</span> Builds a strong nationwide philatelic community, promoting cultural and historical awareness through the exchange and discussion of stamps.</li>
                        <li className="mt-3 md:mt-5 text-sm"><span className='font-bold'>Economic Benefits:- </span> Provides an opportunity for philatelists to trade and sell stamps securely, creating a thriving marketplace. Additionally, premium memberships and marketplace fees can generate revenue for the platform.</li>
                        <li className="mt-3 md:mt-5 text-sm"><span className='font-bold'>Educational Impact:- </span> The digital catalog and historical context of stamps will provide a rich educational experience, spreading knowledge about India’s heritage.</li>
                        <li className="mt-3 md:mt-5 text-sm"><span className='font-bold'>Environmental Benefits:- </span>  By promoting digital engagement and reducing the need for physical catalogs and resources, the platform contributes to a decrease in paper usage, making it more environmentally friendly.</li>
                  </ul>
              </div>
              <div>
                <img src={Flowchart} alt="" />
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

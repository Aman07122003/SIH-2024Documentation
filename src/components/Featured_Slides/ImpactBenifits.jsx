import React, { useEffect } from 'react'
import Navbar from '../navbar'
import Section_3 from '../Section_3'
import Structure from '../Structure'

import Footer from '../Footer'

const ImpactBenifits = () => {
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
                IMPACT AND BENEFITS
              </h1>
            </header>
            <main className='w-full'>
    <div className='mt-5'>
        <h1 className='text-xl font-bold text-gray-700 font-mono'>
            Impact & Benefits
        </h1>

        {/* Potential Impact Section */}
        <div className='mt-8'>
            <h2 className='text-lg font-semibold text-gray-700'>
                1) Potential Impact
            </h2>
            <ul className='list-disc ml-3 mr-3 text-sm'>
                <li className="mt-5 md:mt-5"><span className='font-bold'>Digital Transformation of Philately:</span> The platform will revolutionize the traditional hobby of philately by making it more accessible and engaging, especially for younger generations. AI, blockchain, and AR will modernize the hobby, keeping it relevant.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>National Philatelic Integration:</span> A centralized National Stamp Repository will unify philatelic resources across India, ensuring equal access and fostering national unity and cultural preservation.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Empowerment of the Philatelic Community:</span> The platform will provide tools for managing, trading, and enhancing collections, making the hobby more dynamic and interactive for users.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Economic Stimulation:</span> The platform will stimulate economic activity by facilitating secure and transparent stamp trading, creating new revenue streams for collectors, dealers, and the platform.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Global Reach:</span> The platform will connect Indian philatelists with the global community, increasing the visibility of Indian stamps and positioning India as a significant player in the international philatelic market.</li>
            </ul>
        </div>

        {/* Benefits Section */}
        <div className='mt-10'>
            <h2 className='text-lg font-semibold text-gray-700'>
                2) Benefits
            </h2>
            <ul className='list-disc ml-3 mr-3 text-sm'>
                <li className="mt-5 md:mt-5"><span className='font-bold'>Enhanced Accessibility and Convenience:</span> The platform allows users to access a wide range of stamps and philatelic materials online, securely store and manage collections, and reduce the risk of loss or damage.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Increased Engagement Through Personalization:</span> AI-driven recommendations, AR stamp viewing, and gamified experiences will provide a personalized and engaging user experience.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Secure and Transparent Transactions:</span> Blockchain technology and smart contracts will ensure secure, transparent transactions, building trust among users and reducing the risk of fraud.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Educational and Cultural Value:</span> The platform’s news feed, educational campaigns, and collaborations with India Post will contribute to the preservation and appreciation of India’s postal heritage.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Revenue Generation Opportunities:</span> Users can generate revenue through trading, live auctions, premium memberships, and NFT Philately, monetizing both physical and digital assets.</li>
                
                <li className="mt-3 md:mt-5"><span className='font-bold'>Scalability and Future Growth:</span> The platform is designed to be scalable, with cloud hosting and modern development practices ensuring its ability to grow and remain relevant to the philatelic community over time.</li>
            </ul>
        </div>
        <div className='h-10'>
        </div>
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

export default ImpactBenifits

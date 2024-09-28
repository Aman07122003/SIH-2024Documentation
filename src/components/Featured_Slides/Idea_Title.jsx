import React from 'react'
import Navbar from '../Navbar'
import Section_3 from '../Section_3'
import Structure from '../Structure'
import { useEffect } from 'react'

const Idea_Title = () => {
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
          
          <div className='w-4/5 md:w-9/12 ml-10 md:ml-1'>
           <Structure/>
          </div>
          {/* Mid Section */}
          <div className='p-4 mt-10 md:ml-5 md:mt-0'>
            <header className='h-16 w-full flex justify-center items-start text-3xl font-mono font-extrabold'>
              <h1>
                IDEA TITLE
              </h1>
              
            </header>
            
            <main className=''>
              <div>
                  <h1 className='text-lg font-bold text-gray-700'>
                      Idea-Solution
                  </h1>
                  <ul className='list-disc ml-3 mr-3'>
                        <li className="mt-5">National Stamp Repository: A centralised catalog showcasing stamps and philatelic materials from all postal circles, ensuring nationwide availability.</li>
                        <li className="mt-5">National Philately Deposit Account (NPDA): A virtual account where users can store, manage, and trade their stamp collections securely.</li>
                        <li className="mt-5">Philatelic News Feed: A dedicated section for national and international philatelic news, including new stamp releases, exhibitions, and philately contests.</li>
                        <li className="mt-5">AI-Driven Stamp Recommendations: Leveraging AI to analyse user preferences, previous purchases, and trends, the platform will suggest stamps and collectibles personalised for each user.</li>
                        <li className="mt-5">Blockchain-Enabled Smart Contracts: For secure and transparent trading, the platform will use smart contracts to facilitate stamp trading, ensuring authenticity and secure payments.</li>
                        <li className="mt-5">Premium Subscription Plan: Offer premium membership tiers with access to rare stamps, early releases, or exclusive content like interviews with prominent philatelists.</li>
                        <li className="mt-5">NFT Philately (Digital Collectibles): Introduce NFT stamps—virtual stamps issued by the platform or India Post, verified via blockchain. Collectors can trade, sell, or showcase these digital collectibles, which can accompany physical stamps or exist solely as digital items.</li>
                  </ul>
              </div>
              <div className='mt-10'>
                  <h1 className='text-lg font-bold text-gray-700'>
                      Problem Resolution
                  </h1>
                  <ul className='list-disc ml-3'>
                        <li className="mt-3">Nationwide Access to Philatelic Material</li>
                        <li className="mt-3">Secure ordering with standard postage for reliable delivery.</li>
                        <li className="mt-3">Simple and Scalable application for seamless user engagement.</li>
                        <li className="mt-3">AI-driven Recommendation System</li>
                        <li className="mt-3">Real-time Notifications & Alerts</li>
                        <li className="mt-3">AI-powered chatbot for enhanced assistance</li>
                  </ul>
              </div>
              <div className='mt-10'>
                  <h1 className='text-lg font-bold text-gray-700'>
                      Unique Value Propositions
                  </h1>
                  <ul className='list-disc ml-3'>
                        <li className="mt-3">AI-Powered Stamp Identification and Valuation</li>
                        <li className="mt-3">AI-Driven Stamp Collection Insights</li>
                        <li className="mt-3">Augmented Reality (AR) Stamp Viewing</li>
                        <li className="mt-3">Philately Challenges & Quests for gamified experiences</li>
                        <li className="mt-3">Live auctions or real-time trading rooms</li>
                        <li className="mt-3">NFT stamps—virtual stamps</li>
                        <li className="mt-3">Premium Membership Plans</li>
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

export default Idea_Title

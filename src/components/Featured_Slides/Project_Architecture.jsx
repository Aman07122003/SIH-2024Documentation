
import React from 'react'
import Navbar from '../Navbar'
import Section_3 from '../Section_3'
import Structure from '../Structure'
import { useEffect } from 'react'

const Project_Architecture = () => {
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
            <header className='h-16 w-full flex justify-center items-start md:text-3xl text-xl font-mono font-extrabold'>
              <h1>
                 Project_Architecture
              </h1>
              
            </header>
            
            <main className=''>
          <div>
              <h1 className='text-xl font-bold text-gray-700 flex justify-center'>
                  Functional Requirements
              </h1>
              <h2 className='text-lg font-semibold text-gray-600 mt-4'>
                  User Account Management:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">User Registration & Login: Users can register with the platform, create accounts, and log in using email, social media, or phone number verification.</li>
                  <li className="mt-5">National Philately Deposit Account (NPDA): Users can create and manage a virtual deposit account for storing, managing, and trading stamps.</li>
                  <li className="mt-5">Profile Management: Users can manage their personal details, view transaction history, and set preferences.</li>
              </ul>
              
              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Catalog & Repository:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">National Stamp Repository: A central catalog displaying all philatelic materials released across all postal circles.</li>
                  <li className="mt-5">Search & Filter: Advanced search and filtering options for users to find specific stamps or philatelic items.</li>
                  <li className="mt-5">Stamp Details Page: Detailed pages for each stamp, including history, value, and related items.</li>
              </ul>
              
              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Ordering & Payment:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">Online Ordering: Users can place orders for philatelic materials from any postal circle.</li>
                  <li className="mt-5">Payment Gateway Integration: Support for various payment methods, including credit/debit cards, UPI, net banking, and wallets.</li>
                  <li className="mt-5">Order Tracking: Users can track their orders with real-time updates.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  AI & Blockchain Features:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">AI-Driven Recommendations: Personalized recommendations based on user preferences, past purchases, and trending items.</li>
                  <li className="mt-5">Blockchain-Enabled Smart Contracts: For secure and transparent trading, facilitating peer-to-peer transactions.</li>
                  <li className="mt-5">NFT Philately: Creation, management, and trading of NFT stamps.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Community & Interaction:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">Philatelic News Feed: A section for news on national and international philatelic events, contests, and new releases.</li>
                  <li className="mt-5">Forum & Chat Rooms: Community-driven discussion forums and real-time chat rooms.</li>
                  <li className="mt-5">Live Auctions: Real-time trading rooms and auctions for rare and valuable stamps.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Support & Assistance:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">AI-Powered Chatbot: For answering user queries, guiding new users, and providing recommendations.</li>
                  <li className="mt-5">Customer Support: Contact forms, helpdesk, and support ticket systems.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Additional Features:
              </h2>
              <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5">Augmented Reality (AR) Stamp Viewing: Users can view stamps in AR, enhancing the collecting experience.</li>
                  <li className="mt-5">Gamification: Challenges and quests that encourage users to engage more deeply with the platform.</li>
              </ul>
          </div>

          <div className='mt-10'>
              <h1 className='text-lg font-bold text-gray-700 flex justify-center'>
                  Non-Functional Requirements
              </h1>
              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Performance:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Scalability: The system should be able to handle a large number of users simultaneously, especially during special events like auctions.</li>
                  <li className="mt-3">Latency: Low latency for real-time interactions, particularly in live auctions and chat rooms.</li>
                  <li className="mt-3">Response Time: The system should provide a quick response to user actions, with a maximum response time of 2 seconds for most operations.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Security:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Data Encryption: All sensitive data, such as user information and payment details, should be encrypted in transit and at rest.</li>
                  <li className="mt-3">Authentication & Authorization: Implement robust authentication (e.g., OAuth) and role-based access control to ensure that users only have access to permitted features.</li>
                  <li className="mt-3">Fraud Detection: Integration of AI-powered systems to detect and prevent fraudulent activities, especially in trading and transactions.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Reliability:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Availability: The system should have a high uptime (99.9% or higher), with redundancy and failover mechanisms in place.</li>
                  <li className="mt-3">Backup & Recovery: Regular backups and a well-documented recovery plan in case of system failure.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Usability:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">User-Friendly Interface: The UI should be intuitive, accessible, and easy to navigate, catering to both novice and experienced users.</li>
                  <li className="mt-3">Accessibility: Ensure the platform is accessible to users with disabilities, following WCAG 2.1 guidelines.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Compliance:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Data Privacy: Compliance with local and international data protection regulations, such as GDPR, ensuring users' privacy is protected.</li>
                  <li className="mt-3">Legal Compliance: Ensure the platform adheres to legal standards for e-commerce, digital trading, and content distribution.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Scalability:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Horizontal & Vertical Scaling: The architecture should support both horizontal scaling (adding more machines) and vertical scaling (upgrading the power of existing machines) to handle increasing load.</li>
              </ul>
          </div>

          <div className='mt-10'>
              <h1 className='text-lg font-bold text-gray-700 flex justify-center'>
                  Capacity Estimation
              </h1>
              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  User Base:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Initial Users: Estimate of 10,000 active users within the first six months.</li>
                  <li className="mt-3">Growth Rate: Expected growth of user base at 20% per month as the platform gains popularity.</li>
                  <li className="mt-3">Peak Concurrent Users: Estimate of 1,000 concurrent users during peak events like auctions.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Storage Requirements:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Stamp Repository: Storage for high-resolution images of stamps, metadata, and associated digital assets. Estimate 500 GB in the first year, with a growth of 50 GB per month.</li>
                  <li className="mt-3">User Data: Assume an average of 10 MB of data per user (including account information, transaction history, etc.).</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Network Bandwidth:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Average Load: Estimate bandwidth usage based on data-intensive operations like image loading, video streaming for live auctions, and AR features. Start with 100 Mbps, with scalability options.</li>
                  <li className="mt-3">Peak Load: Ability to handle bursts during peak usage, possibly up to 1 Gbps.</li>
              </ul>
          </div>

          <div className='mt-10'>
              <h1 className='text-lg font-bold text-gray-700 mt-5'>
                  Assumptions
              </h1>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">User Growth: The user base will grow steadily with successful marketing and engagement strategies.</li>
                  <li className="mt-3">Data Accuracy: Assumes accurate and timely data input for all philatelic materials and user-generated content.</li>
                  <li className="mt-3">Third-Party Integration: Payment gateways, AI systems, and blockchain services will be reliably integrated and available.</li>
                  <li className="mt-3">Technology Adoption: Users are assumed to be moderately tech-savvy, with familiarity with e-commerce platforms.</li>
                  <li className="mt-3">Regulatory Compliance: The system will operate within the legal frameworks governing digital commerce, data protection, and philately.</li>
              </ul>
          </div>

          <div className='mt-10'>
              <h1 className='text-lg font-bold text-gray-700 flex justify-center'>
                  Additional Considerations
              </h1>
              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Deployment & Maintenance:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">Cloud Infrastructure: Consider using a cloud provider (e.g., AWS, Azure) for scalable, reliable hosting.</li>
                  <li className="mt-3">DevOps & Continuous Integration: Implement CI/CD pipelines for continuous deployment and automated testing.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Analytics & Monitoring:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">User Analytics: Track user behavior to improve features, personalize experiences, and optimize the platform.</li>
                  <li className="mt-3">System Monitoring: Implement monitoring tools to track uptime, performance, and security incidents.</li>
              </ul>

              <h2 className='text-md font-semibold text-gray-600 mt-5'>
                  Marketing & Community Building:
              </h2>
              <ul className='list-disc ml-3 text-sm'>
                  <li className="mt-3">SEO Optimization: Ensure the website is optimized for search engines to attract philatelists and collectors.</li>
                  <li className="mt-3">Community Engagement: Regular updates, newsletters, and engagement activities to build a vibrant online community.</li>
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

export default Project_Architecture
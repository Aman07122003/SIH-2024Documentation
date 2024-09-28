import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Section_3 from '../Section_3'
import Structure from '../Structure'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Technical_Approach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(`/${page}`)
    }
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
                TECHNICAL APPROACH
              </h1>
            </header>
            <main className='w-full'>
              <div>
                  <h1 className='text-xl font-bold text-gray-700 font-mono'>
                      Programming Language
                  </h1>
                  <ul className='list-disc ml-3 mr-3 text-sm'>
                  <li className="mt-5 md:mt-5">
                      <span className='font-bold text-lg'>Frontend:- </span>
                      <ul className='ml-4'> {/* Nested list for the items */}
                      <li className='mt-3'><span className='font-bold'>HTML5:- </span>To structure the web pages.</li>
                      <li className='mt-3'><span className='font-bold'>CSS3/SASS:- </span>For styling the user interface.</li>
                      <li className='mt-3'><span className='font-bold'>JavaScript:- </span>For dynamic content and interactive elements.</li>
                      <li className='mt-3'><span className='font-bold'>TypeScript:- </span>For type safety and better tooling in JavaScript applications.</li>
                      <li className='mt-3'><span className='font-bold'>Frontend (Mobile):- </span>React Native</li>
                      </ul>
                  </li>
                  <li className="mt-5 md:mt-5">
                      <span className='font-bold text-lg'>Backend:- </span>
                      <ul className='ml-4'> {/* Nested list for the items */}
                      <li className='mt-3'><span className='font-bold'>Node.js:- </span>For building the server-side logic and handling API requests.</li>
                      <li className='mt-3'><span className='font-bold'>Python:- </span>For AI/ML models, especially in recommendation systems and fraud detection.</li>
                      <li className='mt-3'><span className='font-bold'>Solidity:- </span>For writing smart contracts on the Ethereum blockchain (for NFT Philately).</li>
                      </ul>
                  </li>
                  <li className="mt-5 md:mt-5">
                      <span className='font-bold text-lg'>Database:- </span>
                      <ul className='ml-4'> {/* Nested list for the items */}
                      <li className='mt-3'><span className='font-bold'>MongoDB Query Language (MQL):- </span> For interacting with MongoDB.</li>
                      </ul>
                  </li>
                  </ul>
              </div>
              <div className='mt-10'>
                <h1 className='text-xl font-bold text-gray-700 font-mono'>
                    Frameworks & Tools
                </h1>
                <ul className='list-disc ml-3 mr-3 text-sm'>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Frontend:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>React.js/Next.js:- </span>For building a dynamic and responsive user interface.</li>
                            <li className='mt-3'><span className='font-bold'>Redux:- </span>For state management across the application.</li>
                            <li className='mt-3'><span className='font-bold'>Bootstrap/Tailwind CSS:- </span>For responsive design and pre-built UI components.</li>
                            <li className='mt-3'><span className='font-bold'>Three.js/A-Frame:- </span>For Augmented Reality (AR) stamp viewing.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Backend:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Express.js:- </span>For building RESTful APIs with Node.js.</li>
                            <li className='mt-3'><span className='font-bold'>Django/Flask:- </span>For handling AI-driven functionalities if using Python.</li>
                            <li className='mt-3'><span className='font-bold'>Socket.io:- </span>For real-time communication in live auctions and chat rooms.</li>
                            <li className='mt-3'><span className='font-bold'>Web3.js:- </span>For interacting with blockchain and smart contracts.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Database:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>MongoDB:- </span>As the primary database for storing user data, stamps, and transactions.</li>
                            <li className='mt-3'><span className='font-bold'>Redis:- </span>For caching frequently accessed data to improve performance.</li>
                            <li className='mt-3'><span className='font-bold'>Elasticsearch:- </span>For implementing search and filtering functionalities.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>DevOps & CI/CD:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Docker:- </span>For containerizing applications and ensuring consistency across environments.</li>
                            <li className='mt-3'><span className='font-bold'>Kubernetes:- </span>For orchestrating containerized applications and managing deployments.</li>
                            <li className='mt-3'><span className='font-bold'>Jenkins/GitHub Actions:- </span>For Continuous Integration/Continuous Deployment (CI/CD) pipelines.</li>
                            <li className='mt-3'><span className='font-bold'>Terraform:- </span>For infrastructure as code to manage cloud resources.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>AI/ML:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>TensorFlow/PyTorch:- </span>For building and deploying AI-driven recommendation systems.</li>
                            <li className='mt-3'><span className='font-bold'>Scikit-Learn:- </span>For fraud detection and basic AI functionalities.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Blockchain:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Ethereum:- </span>As the blockchain platform for NFTs and smart contracts.</li>
                            <li className='mt-3'><span className='font-bold'>Infura/Alchemy:- </span>For connecting to the Ethereum network.</li>
                            <li className='mt-3'><span className='font-bold'>Metamask:- </span>For user interactions with blockchain, e.g., for NFT trading.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>APIs:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Stripe/PayPal API:- </span>For payment processing.</li>
                            <li className='mt-3'><span className='font-bold'>SendGrid/Mailgun API:- </span>For sending transactional emails.</li>
                            <li className='mt-3'><span className='font-bold'>Twilio API:- </span>For SMS notifications and two-factor authentication.</li>
                        </ul>
                    </li>
                </ul>

                <h1 className='text-xl font-bold text-gray-700 font-mono mt-10'>
                    Hardware Requirements
                </h1>
                <ul className='list-disc ml-3 mr-3 text-sm'>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Server Infrastructure:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Cloud Hosting (AWS/Azure/GCP):- </span>For hosting the application with autoscaling capabilities.</li>
                            <li className='mt-3'><span className='font-bold'>Virtual Private Cloud (VPC):- </span>For network isolation and security.</li>
                            <li className='mt-3'><span className='font-bold'>Load Balancer:- </span>To distribute traffic evenly across backend servers.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Storage:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Elastic File System (EFS)/Amazon S3:- </span>For storing static assets like stamp images and NFT metadata.</li>
                            <li className='mt-3'><span className='font-bold'>Database Storage:- </span>High-performance SSDs for MongoDB to handle large volumes of read/write operations.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Networking:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Content Delivery Network (CDN):- </span>For faster delivery of static content globally.</li>
                            <li className='mt-3'><span className='font-bold'>High Bandwidth Internet Connection:- </span>For supporting real-time auctions and live data feeds.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>AI/ML Hardware:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>GPUs (NVIDIA Tesla/RTX):- </span>For training and deploying machine learning models efficiently.</li>
                            <li className='mt-3'><span className='font-bold'>TPUs (Google Cloud):- </span>For faster AI model inference if using TensorFlow.</li>
                        </ul>
                    </li>
                    <li className="mt-5 md:mt-5">
                        <span className='font-bold text-lg'>Monitoring & Security:- </span>
                        <ul className='ml-4'>
                            <li className='mt-3'><span className='font-bold'>Intrusion Detection Systems (IDS):- </span>To monitor for suspicious activity and potential security threats.</li>
                            <li className='mt-3'><span className='font-bold'>Web Application Firewall (WAF):- </span>To protect against common web attacks like SQL injection and cross-site scripting (XSS).</li>
                            <li className='mt-3'><span className='font-bold'>Backup Solutions:- </span>Automated backup systems for databases and application data.</li>
                        </ul>
                    </li>
                </ul>
            </div>

              <div className='h-10'>

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

export default Technical_Approach







  


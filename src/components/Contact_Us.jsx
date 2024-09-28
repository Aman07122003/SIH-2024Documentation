import React from 'react';
import Navbar from './Navbar';
import Email from '../assets/Email.png';
import Linkedin from '../assets/Linkedin.webp';
import Githubb from '../assets/Githubb.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Aman from '../assets/Aman.jpeg'

const Contact_Us = () => {
  const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(`/${page}`)
    }
  return (
    <>
      <div className='h-screen w-full'>
        <Navbar />
        {/* Title */}
        <div className='pt-32 w-full flex justify-center items-center text-4xl md:text-4xl font-semibold'>
          Team&nbsp;<span className=''>Members</span>
        </div>
        <div className="breadcrumbs text-md flex justify-center  h-10 w-full text-blue-600 font-semibold">
          <ul>
            <li><a onClick={() => handleClick(' ')}>Home</a></li>
            <li><a>Team Members</a></li>
          </ul>
        </div>
        {/* Contact Cards */}
        <div className='mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center h-6/7'>

            <div className="card bg-base-100 w-72 shadow-xl">
              <figure className="pt-6">
                <img
                  src={Aman}
                  alt={item.Name}
                  className='w-44 object-cover rounded-full'
                />
              </figure>
              <div className="card-body text-center">
                <h2 className="card-title justify-center">Aman Pratap Singh</h2>
                <p className="text-sm text-gray-600">+91-9351873908</p>
                <p className="text-sm text-gray-600">Team Leader</p>
                <p className="text-sm text-gray-600">Full Stack</p>
                <div className="card-actions justify-center flex gap-x-3">
                   <button><a href="https://www.youtube.com/">
                      <img src={Email} 
                      alt=""
                      className='h-7 w-7' />
                    </a></button>

                   <button><img src={Linkedin} 
                   alt=""
                   className='h-7 w-7' /></button>

                   <button><img src={Githubb} 
                   alt=""
                   className='h-7 w-7' /></button>
                </div>
              </div>
            </div>
        </div>
        <div className='h-20 w-full flex justify-center items-end'>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Contact_Us;

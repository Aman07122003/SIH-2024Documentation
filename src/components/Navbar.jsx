import React from 'react'
import SIH from '../assets/SIH.png';
import Ninja_coder from '../assets/Ninja_coder.png'
import { useNavigate } from 'react-router-dom';
import Page_1 from './Page_1';

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(`/${page}`)
    }
  return (
    <header>
          <nav className="navbar h-[70px] bg-white fixed z-50 flex justify-between">
            <button onClick={() => handleClick(' ')} className='cursor-pointer ml-2'>
                <div className=" flex-col">
                    <img src={Ninja_coder} alt="" 
                    className='w-10 ml-8 mt-2'/>
                    HexaBruteForce
                </div>
            </button>

            <div className='hidden md:block'>
              <h1 className='text-6xl font-bold text-orange-500'>
                SMART INDIA <span className='text-green-500'>HACKATHON 2024</span>
              </h1>
            </div>

            <div className=''>
                <img src={SIH} alt="Smart India Hackathon Logo" className='w-32 md:w-36'/>
            </div>
          </nav>
          
        </header>
  )
}

export default Navbar
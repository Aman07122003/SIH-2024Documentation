import React from 'react'
import { useNavigate } from 'react-router-dom';

const Structure = () => {
    const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(`/${page}`)
    }
  return (
    <>
        <div className="breadcrumbs text-md flex justify-center  h-10 w-full text-blue-600 font-semibold">
            <ul>
                <li><a onClick={() => handleClick(' ')}>Home</a></li>
                <li><a>Present Slide</a></li>
            </ul>
        </div>
      <div className=' md:w-full w-full bg-slate-50 rounded-3xl md:ml-3'>
        
        <ul className="menu rounded-box md:w-11/12 ">
                <h1 className=' flex justify-center text-2xl font-bold text-gray-700 border-b-2 border-black h-10'>
                    STRUCTURE
                </h1>
                <div className='mt-5'>
                    <li>
                        <details>
                        <summary className='font-semibold'>Title Page</summary>
                        <ul>
                            <li><a>Problem Statement ID :- 1762</a></li>
                            <li><a href="">PS Title:- India Philately Hub</a></li>
                            <li><a href="">Ministry of Communication</a></li>
                            <li><a href="">Theme :- Transportation & Logistics</a></li>
                            <li><a href="">PS Category :- Software</a></li>
                            <li><a href="">Team ID :- 2523</a></li>
                            <li><a href="">Team Name :- "HexaBruteForce"</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary className='font-semibold'>Idea Title</summary>
                        <ul>
                            <li><a>Idea/Solution</a></li>
                            <li><a>Problem Resolution</a></li>
                            <li><a>Unique Value Proposition</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary className='font-semibold'>Technical Approach</summary>
                        <ul>
                            <li><a>Programming Language</a></li>
                            <li><a>Frameworks & Tools</a></li>
                            <li><a href="">Hardware</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary className='font-semibold'>Feasibility Viability</summary>
                        <ul>
                            <li><a>Feasibility of the Idea</a></li>
                            <li><a>Potential Challenges</a></li>
                            <li><a href=""> Overcoming These Challenges</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary className='font-semibold'>Impact & Benefits</summary>
                        <ul>
                            <li><a>Potential Impact</a></li>
                            <li><a>Benefits of Solution</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary className='font-semibold'>Research & Reference</summary>
                        <ul>
                            <li><a>Research Source</a></li>
                            <li><a>References</a></li>
                        </ul>
                        </details>
                    </li>
                </div>
            </ul>
        </div>
    </>
  )
}

export default Structure
import React from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Page_2 = () => {
  const navigate = useNavigate();
  const handleClick = ((page) => {
    navigate(`/${page}`)
  })
  return (
    <>
        <div className='md:h-[70vh] w-full'>
      <div className='h-2/7 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center '>
         <div className="card card-bordered border-black bg-slate-50 shadow-lg w-11/12">
            <div className="card-body">
                <h2 className="card-title font-extrabold">IDEA TITLE</h2>
                <ul className="list-disc pl-5">
                  <li>Idea/Solution</li>
                  <li>Problem Resolution</li>
                  <li>Unique Value Propositions</li>
                </ul>
                <div className="card-actions justify-end">
                  <button onClick={() => handleClick('Idea_Title')} className="btn btn-neutral">View More</button> 
                </div>
              </div>
          </div>
          <div className="card card-bordered border-black bg-slate-50 shadow-lg w-11/12">
            <div className="card-body">
                <h2 className="card-title font-extrabold">TECHNICAL APPROACH</h2>
                <ul className="list-disc pl-5">
                  <li>Programming Languages</li>
                  <li>Frameworks & Tools</li>
                  <li>Hardware</li>
                </ul>
                <div className="card-actions justify-end">
                <button onClick={() => handleClick('Technical_Approach')} className="btn btn-neutral">View More</button>  
                </div>
              </div>
          </div>
          <div className="card card-bordered border-black bg-slate-50 shadow-lg w-11/12">
            <div className="card-body">
                <h2 className="card-title font-extrabold">PROJECT ARCHITECTURE </h2>
                <p>A visual of system components, interactions, and data flow for a scalable solution.</p>
                <div className="card-actions justify-end">
                <button onClick={() => handleClick('Project_Architecture')} className="btn btn-neutral">View More</button> 
                </div>
              </div>
          </div>
          <div className="card card-bordered border-black bg-slate-50 shadow-lg w-11/12">
            <div className="card-body">
                <h2 className="card-title font-extrabold">FEASIBILITY & VIABILITY</h2>
                <ul className="list-disc pl-5">
                  <li>Analysis of the Feasibility of the Idea</li>
                  <li>Potential Challenges and Risks</li>
                  <li>Strategies for Challenges </li>
                </ul>
                <div className="card-actions justify-end">
                <button onClick={() => handleClick('FeasibilityViability')} className="btn btn-neutral">View More</button>  
                </div>
              </div>
          </div>
          <div className="card card-bordered border-black bg-slate-50 shadow-lg w-11/12">
            <div className="card-body">
                <h2 className="card-title font-extrabold">IMPACT & BENIFITS</h2>
                <ul className="list-disc pl-5">
                  <li>Potential Impact on the Target Audience</li>
                  <li>Benifits of the Solution (Social, Econimical, Educational, Environmental)</li>
                </ul>
                <div className="card-actions justify-end">
                <button onClick={() => handleClick('ImpactBenifits')} className="btn btn-neutral">View More</button> 
                </div>
              </div>
          </div>
          <div className="card card-bordered border-black bg-slate-50 shadow-lg w-11/12">
            <div className="card-body">
                <h2 className="card-title font-extrabold">RESEARCH AND REFERENCE</h2>
                
                <ul className="list-disc pl-5">
                  <li>Research Sources</li>
                  <li>Reference</li>
                  <li>Additional Links</li>
                </ul>
                <div className="card-actions justify-end ">
                <button onClick={() => handleClick('ResearchReference')} className="btn btn-neutral">View More</button> 
                </div>
              </div>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Page_2
import React from 'react';
import Flowchart_4 from '../../assets/Flowchart_4.png';

const Diagram = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col items-center'>
      <div className='h-14 w-full'>
        <h1 className='md:text-3xl text-lg font-mono font-bold flex justify-center mt-3'>
          HIGH LEVEL SYSTEM DESIGN
        </h1>
      </div>
      <div className='flex justify-center items-center flex-grow'>
        <img 
          src={Flowchart_4} 
          alt="High Level System Design Flowchart" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Diagram;

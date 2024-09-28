import React from 'react'
import SS from '../assets/SS.png'

const FlowDiagram = () => {
  return (
    <div>
        <div className='flex justify-center text-2xl font-mono font-bold mt-0'>
            Technical Flow Diagram
        </div>
        <div className='mt-5'>
            <img src={SS} alt="" />
        </div>
    </div>
  )
}

export default FlowDiagram
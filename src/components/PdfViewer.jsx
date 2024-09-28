import React from 'react';
import Pdf from '../assets/Pdf.pdf'; // Adjust the path to your PDF file
import First from '../assets/First.jpg'
import Second from '../assets/Second.jpg'
import Three from '../assets/Three.jpg'
import Four from '../assets/Four.jpg'
import Five from '../assets/Five.jpg'
import Six from '../assets/Six.jpg'

const PdfViewer = () => {
    return (
        <div className='h-[110vh] w-full items-center'>
            <div className='mt-6 w-full flex justify-center items-center text-2xl md:text-3xl font-bold font-mono'>
                MY IDEA PRESENTATION
            </div>
            <div className="breadcrumbs text-md flex justify-center h-10 w-full text-blue-600 font-semibold">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/team">PPT</a></li>
                </ul>
            </div>
            <div className='w-full h-[100vh] mt-5 mb-5 hidden md:block'>
                <div className='w-full h-full flex justify-center '>
                    <iframe src={Pdf} width="80%" height="100%" title="PDF Viewer" />
                </div>
            </div>
            <div className='mt-5 w-full block md:hidden'>
                <div>
                    <img src={First} alt="" className='mt-2' />
                </div>
                <div>
                    <img src={Second} alt="" className='mt-2'/>
                </div>
                <div>
                    <img src={Three} alt="" className='mt-2'/>
                </div>
                <div>
                    <img src={Four} alt="" className='mt-2'/>
                </div>
                <div>
                    <img src={Five} alt="" className='mt-2'/>
                </div>
                <div>
                    <img src={Six} alt="" className='mt-2'/>
                </div>
            
            </div>
        </div>
    );
};

export default PdfViewer;

import React from 'react';
import Pdf from '../assets/Pdf.pdf'; // Adjust the path to your PDF file

const PdfViewer = () => {
    return (
        <div className='h-[110vh] w-full flex flex-col items-center'>
            <div className='mt-6 w-full flex justify-center items-center text-4xl md:text-4xl font-semibold font-mono'>
                Team&nbsp;<span>Members</span>
            </div>
            <div className="breadcrumbs text-md flex justify-center h-10 w-full text-blue-600 font-semibold">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/team">Team Members</a></li>
                </ul>
            </div>
            <div className='w-full h-full flex justify-center mt-5 mb-10'>
                <iframe src={Pdf} width="80%" height="100%" title="PDF Viewer" />
            </div>
            <div className='mt-5 h-16 w-36 flex justify-center items-center rounded-full block md:hidden bg-blue-600 mb-5'>
                <a href={Pdf} download className="text-white font-extrabold">
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default PdfViewer;

import React from 'react';
import Pdf from '../assets/Pdf.pdf'; // Adjust the path to your PDF file

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
            <div className='w-full h-[100vh] hidden md:block mt-5 mb-5'>
                <div className='w-full h-full flex justify-center '>
                    <iframe src={Pdf} width="80%" height="100%" title="PDF Viewer" />
                </div>
                <div className='h-16 w-36 flex justify-center items-center rounded-full block md:hidden bg-blue-600 mb-5'>
                    <a href={Pdf} download className="text-white font-extrabold">
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;

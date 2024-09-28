import React from 'react';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import Pdf from '../assets/Pdf.pdf';
import { useNavigate } from 'react-router-dom';

function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(`/${page}`)
    }

    return (
        <>
            <div className='h-[100vh] w-full flex flex-col'>
                <div className='w-full flex justify-center items-center mt-2 flex-col'>
                    <h1 className='text-3xl font-bold font-mono'>
                        Presentation
                    </h1>
                    <div className="breadcrumbs text-md flex justify-center  h-10 w-full text-blue-600 font-semibold">
                        <ul>
                            <li><a onClick={() => handleClick(' ')}>Home</a></li>
                            <li><a>PDF</a></li>
                        </ul>
                    </div>
                </div>
                <div className='h-[90vh] mt-5 flex justify-center items-center'>
                    <div className='w-full h-full overflow-auto'>
                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                            <Viewer fileUrl={Pdf} plugins={[defaultLayoutPluginInstance]} />
                        </Worker>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PdfViewer;

import React from 'react';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import Pdf from '../assets/Pdf.pdf';

function PdfViewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <div className='h-[100vh] w-full flex flex-col'>
                
                <div className='h-[98vh] mt-2 bg-slate-100 flex justify-center items-center'>
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

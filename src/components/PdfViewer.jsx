import React, { useState } from 'react';
import Pdf from '../assets/Pdf.pdf'; // Adjust the path to your PDF file
import First from '../assets/First.jpg';
import Second from '../assets/Second.jpg';
import Three from '../assets/Three.jpg';
import Four from '../assets/Four.jpg';
import Five from '../assets/Five.jpg';
import Six from '../assets/Six.jpg';

const PdfViewer = () => {
    const [loading, setLoading] = useState(true);
    const images = [First, Second, Three, Four, Five, Six];

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className='h-[110vh] w-full flex flex-col items-center'>
            <div className='mt-6 w-full flex justify-center items-center text-2xl md:text-3xl font-bold font-mono'>
                MY IDEA PRESENTATION
            </div>
            <div className="breadcrumbs text-md flex justify-center h-10 w-full text-blue-600 font-semibold">
                <ul className='flex space-x-2'>
                    <li><a href="/" className='hover:underline'>Home</a></li>
                    <li><a href="/team" className='hover:underline'>PPT</a></li>
                </ul>
            </div>
            {/* PDF Viewer for md and above */}
            <div className='w-full h-[100vh] mt-5 mb-5 hidden md:block'>
                <div className='w-full h-full flex justify-center'>
                    <iframe src={Pdf} width="80%" height="100%" title="PDF Viewer" />
                </div>
            </div>
            {/* Mobile View with Loader */}
            <div className='mt-5 w-full block md:hidden'>
                {loading && (
                    <div className='flex justify-center items-center h-[50vh]'>
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                    </div>
                )}
                <div className={loading ? 'hidden' : 'block'}>
                    {images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index + 1}`} className='mt-2' onLoad={handleImageLoad} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;

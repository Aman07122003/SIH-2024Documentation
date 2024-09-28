import React, { useState, useEffect } from 'react';
import Pdf from '../assets/Pdf.pdf';
import { useNavigate } from 'react-router-dom';

const PdfViewer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleClick = (page) => {
        navigate(`/${page}`);
    };

    // Simulate loading for demo purposes
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='h-screen w-full bg-slate-100 flex flex-col items-center'>
            <div className='w-full'>
                <div className='mt-6 w-full flex justify-center items-center text-4xl md:text-4xl font-semibold font-mono'>
                    Team&nbsp;<span>Members</span>
                </div>
                <div className="breadcrumbs text-md flex justify-center h-10 w-full text-blue-600 font-semibold">
                    <ul>
                        <li><a onClick={() => handleClick(' ')}>Home</a></li>
                        <li><a>Team Members</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-full flex justify-center mt-5'>
                {loading ? (
                    <div>Loading PDF...</div>
                ) : (
                    <embed src={Pdf} type="application/pdf" width="80%" height="100%" />
                )}
            </div>
        </div>
    );
};

export default PdfViewer;

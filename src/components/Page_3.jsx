import React from 'react';

const Page_3 = () => {
  return (
    <>
      <div className='h-screen w-full mt-16 md:mt-2'>
        <div className='h-10 w-full flex justify-center items-center'>
          <h1 className='text-2xl font-extrabold font-mono'>
            Video Explanation
          </h1>
        </div>

        {/* YouTube iframe */}
        <div className='flex justify-center mt-10 md:h-4/6 h-3/6 w-full '>
          <iframe 
              className='h-full md:h-full w-11/12 md:w-9/12 rounded-xl' 
              src="https://www.youtube.com/embed/-IhCM2YfAWI" 
              title="YouTube video player" 
              style={{ border: 'none' }} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            ></iframe>
        </div>
        <div className='md:mt-16 md:px-0 text-center font-semibold bg-slate-50 mt-10 w-full flex items-center justify-center'>
          <p className='md:text-lg w-3/4 md:w-11/12'>
            In this video, I walk through the detailed concept of our project for the Smart India Hackathon 2024. 
            I explain the core idea, the problem we aim to solve, and our innovative solution. Additionally, I 
            highlight key aspects of our PowerPoint presentation, offering a comprehensive understanding of 
            our approach and its potential impact. Watch the video to explore our project’s vision and 
            how we plan to implement it effectively.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page_3;

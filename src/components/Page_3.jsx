import React from 'react';

const Page_3 = () => {
  return (
    <>
      <div className='h-[100vh] w-full mt-16 md:mt-2'>
        <div className='h-10 w-full flex justify-center items-center'>
          <h1 className='text-2xl md:text-4xl font-extrabold font-mono'>
            Video Explanation
          </h1>
        </div>

        {/* YouTube iframe */}
        <div className='flex justify-center mt-10 md:h-4/6 h-4/6 w-full '>
          <iframe 
              className='w-11/12 md:w-9/12 rounded-xl ' 
              src="https://www.youtube.com/embed/gylwA0y7Ymg" 
              title="YouTube video player" 
              style={{ border: 'none' }} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
            ></iframe>
        </div>
        <div className=' md:px-0 text-center  font-semibold mt-10 w-full flex items-center justify-center'>
          <p className='w-3/4 md:w-11/12'>
            In this video, I walk through the detailed concept of our project for the Smart India Hackathon 2024. 
            I explain the core idea, the problem we aim to solve, and our innovative solution.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page_3;

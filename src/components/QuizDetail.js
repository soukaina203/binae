import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { quiz } from '../data/quiz';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function QuizDetail() {
  const { id } = useParams();
  const week = quiz.find(e => e.id === parseInt(id));

  return (
    <Zoom>

    <div className='flex flex-col items-center justify-center h-full mx-4 my-8 h-ful lg:flex-row lg:justify-center lg:mx-auto'>
      <div className='flex flex-col p-10 lg:flex-row '> 
      {/* Content on the left */}
      <div className='flex flex-col justify-center p-5 font-bold text-center lg:text-right'>
        <h1 className='text-2xl font-semibold text-[#2E7C7F] mb-3'>مدارسة الأبواب التالية  </h1>
        {week?.lecons.map((e) => (
          <h2 key={e.id} className='mb-2 text-[19px] font-semibold'>
            <Link to={`/lecon/${id}/${e.id}`} className=''>
              {e.title} - 
            </Link>
          </h2>
        ))}
          <a href={week.lien} target='_blank' rel="noreferrer" 
      
          >
        <button className='
        w-full px-4 py-3  font-semibold
 text-white text-[1.1rem] bg-[#2E7C7F]  focus:outline-none
        '>
            التقييم
        </button>
          </a>
      </div>

      {/* Video iframe on the right   lg:w-[50rem] lg:h-[28rem]  */}
      <iframe
        className="w-full h-[25rem]   lg:w-[50rem] lg:h-[28rem]  "
        src={`https://www.youtube.com/embed/${week?.resumeVideo}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    </Zoom>
    
  );
}

export default QuizDetail;

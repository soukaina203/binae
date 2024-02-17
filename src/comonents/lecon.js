import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/lecons';

function Lecon() {
  const { week, lecon } = useParams();
  const weekObject = data.find((w) => w.id == week);
  const leconObject = weekObject?.lecons.find((l) => l.id == lecon);

  return (
    <div className="container mx-auto mt-8 ">
      <div className="p-8 rounded shadow-md">

        <h2 className="mb-6 text-3xl font-bold text-center text-[#7b6796] mt-7"> {weekObject?.week} : {leconObject?.title}</h2>

  
        <div className='flex flex-col w-full gap-5 lg:flex-row'>
          {/* Use flex-col for mobile and tablet, and flex-row for desktop */}
          <div className='w-full '>

            <div className="aspect-w-16 aspect-h-9">
              {/* Set the aspect ratio to 16:9 for the YouTube video */}
              <iframe
                className="w-full h-[20rem] md:h-[30rem] lg:h-[36rem]"
                src={`https://www.youtube.com/embed/${leconObject?.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className='w-full '>
            <div className="aspect-w-16 aspect-h-9">
              {/* Set the aspect ratio to 16:9 for the PDF viewer */}
              <iframe
                className="w-full h-[36rem] md:h-[36rem] lg:h-[36rem]"
                src={`resumePDF/${leconObject.pdf}`}
                title="PDF Viewer"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lecon;

  /* <div>
  <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
            <a href={`resumePDF/${leconObject?.pdf}`} download className="font-bold">
              تحميل الملخص
            </a>
          </button>
  </div> */
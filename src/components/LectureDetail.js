import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/lecons';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function LectureDetail() {
  const { id } = useParams();
  const week = data.find(e => e.id === parseInt(id));

  if (!week) {
    // Handle the case where the week is not found
    return <div>Week not found</div>;
  }

  return (
    <Zoom>

    <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 ">
    {week.lecons?.map((e) => (
      <div key={e.id} className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[18rem]"
          src={`https://www.youtube.com/embed/${e?.videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ))}
  </div>
  </Zoom>
  );
}

export default LectureDetail;

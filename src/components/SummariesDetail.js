import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data/lecons';
import Button from '@mui/material/Button'

import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function SummariesDetail() {
  const { id } = useParams();
  const week = data.find(e => e.id === parseInt(id));
  if (!week) {
    // Handle the case where the week is not found
    return <div>Week not found</div>;
  }
  return (
    <Zoom>
      <div id='mission' className='flex flex-col h-full mt-6 '>
        <div dir='rtl' className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto ml-auto mr-auto duration-500 transform lg:gap-9 place-content-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 '>
          {week.lecons?.map((e) => (
            <div key={e.id} className='flex flex-col 
           w-[20rem] h-[15rem] max-w-sm p-4 pb-6
         mx-auto transition-all duration-300 transform
          shadow-md  cursor-pointer
          lg:p-12 lg:pb-6 hover:-translate-y-1n
           hover:shadow-xl  hover:scale-110 justify-center items-center '>
              <img src='icons/test2.png' alt='' className='   w-[4rem] h-[4rem]' />
              <h1 className='font-bold text-[18px] text-center '>{e.title}</h1>
              <a download href={`resumePDF/${e.pdf}`}>

                <button className='w-full px-3 py-2 mt-3 mb-2 font-semibold
             text-white bg-[#777f87] focus:outline-none hover:opacity-80'>
                  تحميل الملخص
                </button>
              </a>
            </div>
          ))}
        </div>

      </div>
    </Zoom>
  )
}

export default SummariesDetail

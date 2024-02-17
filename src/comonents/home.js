import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Link } from 'react-router-dom';
import { data } from '../data/lecons';
function Home() {
  return (
<Zoom>

    <div className=''>

      <div className="p-4 w-4/4">



        {/* Main content */}
        <div className='mt-5'>
  {data.map((e) => (
    <Accordion key={e.id}>
      <AccordionSummary
      className="pr-6 text-right"
        aria-controls="panel1-content"
        id="panel1-header"
       // Add the text-right class here
      >
        <h2 className='w-full text-[#7b6796] text-[1.4rem] font-semibold'>{e.week}</h2>
      </AccordionSummary>
      {e.lecons.map((i) => (
        <AccordionDetails key={i.id} className="pr-6 text-right">
          <p className='text-xl font-semibold'>
            <Link to={`/lecon/${e.id}/${i.id}`}>
              {i.title}
            </Link>
          </p>
        </AccordionDetails>
      ))}
    </Accordion>
  ))}
</div>

<div class="flex flex-col mb-8 mt-4 lg:mt-2 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

<a download href={`resumePDF/book.pdf`}> 

<button className='w-full px-4 py-3  font-semibold
 text-white text-[1.1rem] bg-[#7b6796] focus:outline-none '>
 تحميل كتاب المنهاج
</button>
</a>

<a download href={`resumePDF/schedule.pdf`}> 

<button className='w-full px-4 py-3  font-semibold
 text-white text-[1.1rem] bg-[#7b6796] focus:outline-none '>
تحميل جدول المرحلة التمهيدية</button>
</a>
</div>

      </div>

    </div>
</Zoom>

  )
}

export default Home

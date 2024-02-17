import React from 'react'
import { data } from '../data/lecons';
import { Link } from 'react-router-dom';
import { MdOutlineQuiz } from "react-icons/md";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Quiz() {
  return (
    <Zoom>{/*Using Zoom Effect*/}

    <div>
          <div id='mission' className='flex flex-col lg:mt-[5rem] h-full mt-6 '>



<div dir="rtl" className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto ml-auto mr-auto duration-500 transform place-content-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 '>

       {data.map((e,i) => {
              return (
               <Link to={`/quiz/${e.id}`}>
                <div className='flex flex-col w-[18rem] h-[15rem] max-w-sm p-4 pb-6
         mx-auto transition-all duration-300 transform shadow-md cursor-pointer
          lg:p-12 lg:pb-6 hover:-translate-y-1n hover:shadow-xl hover:scale-110 justify-center items-center '>
<img src='icons/test.png' alt='' className='w-[4rem] h-[4rem]'/>
                  <h1 className='mt-5 text-2xl font-bold text-[#55626E] '>تقييم {e.week}</h1>

                </div>
                </Link>
              );
            })}
          </div>
          </div>
    </div>
    </Zoom>
  )
}

export default Quiz

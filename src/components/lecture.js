import React from 'react'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Header from '../comonents/Header';
import { data } from '../data/lecons'
import { Link } from 'react-router-dom';
import { CgPathOutline } from "react-icons/cg";
import { FaMosque } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";

function Lecture() {

  const icons = [<FaMosque className=' w-[4rem] h-[4rem] text-[#55626E] ' />,
  <FaMoon className='w-[4rem] h-[4rem] text-[#55626E]' />, <IoSunnyOutline className='w-[4rem] h-[4rem] text-[#55626E]' />,
<IoBookSharp className='w-[4rem] h-[4rem] text-[#55626E]'/>

  ]
  return (
    <>
      <Zoom>{/*Using Zoom Effect*/}

        <div id='mission' className='flex flex-col h-full mt-6 '>



          <div dir="rtl" className='container grid justify-center lg:mt-[5rem] w-auto grid-cols-1 p-10 mx-auto ml-auto mr-auto duration-500 transform place-content-center md:p-8 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-4 '>

            {data.map((e, i) => {
              return (
                <Link to={`/lectures/${e.id}`}>
                  <div className='flex bg-white flex-col w-[18rem] h-[15rem] max-w-sm p-4 pb-6
mx-auto transition-all duration-300 transform shadow-md cursor-pointer
lg:p-12 lg:pb-6 hover:-translate-y-1n hover:shadow-xl 
hover:scale-110 justify-center items-center '>

                    {icons[i]}
                    <h1 className='mt-5 text-2xl font-bold text-black'>{e.week}</h1>

                  </div>
                </Link>
              );
            })}
          </div>
        </div>


      </Zoom>
    </>
  )
}

export default Lecture
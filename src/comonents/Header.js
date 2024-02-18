import React from 'react'
import { Link } from 'react-router-dom'
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Header() {

  return (
    <div>
      <nav className="w-full bg-white shadow-md shadow-gray-200">
        <div className="container flex items-center justify-between m-auto ">
       
          <ul className="flex-row-reverse items-center hidden pr-10 text-base font-semibold cursor-pointer lg:flex">
            <li className="px-6 py-4 text-xl duration-500 underlineHover hover:pointer-auto" >
              <Link to="/home" >  الدروس </Link>
            </li>


            <li className="px-6 py-4 text-xl duration-500 underlineHover hover:pointer-auto " >
              <Link to="/lectures" >
                المحاضرات

              </Link> </li>
            <li className="px-6 py-4 text-xl duration-500 underlineHover" >
              <Link to="/quiz" > التقييمات </Link>
            </li>
            <li className="px-6 py-4 text-xl duration-500 underlineHover" > <Link to="/summaries" >  الملخصات </Link> </li>
            {/* <li className="px-6 py-4 duration-500 underlineHover" > <Link to="/islam" >  قضايا الأمة الإسلامية </Link> </li> */}



          </ul>
      

          {/* phone & tablet */}
          <button className="z-50 p-5 lg:hidden group">
            <GiHamburgerMenu className="mr-5 text-2xl" />



            <div className="absolute top-0 flex items-center w-8/12 h-screen ml-auto mr-auto text-white transition-all duration-500 bg-[#55626E] opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
              <ul className="flex flex-col items-center justify-center w-[98%]  font-semibold  m-2">
                <li className="w-full px-6 py-4 text-2xl font-semibold uppercase duration-500 hover:bg-[#444f59]">
                <Link to="/home" >  الدروس </Link>

                </li>

                <li className="w-full px-6 py-4 text-2xl font-semibold uppercase duration-500 rounded-md hover:bg-[#444f59] ">
                <Link to="/lectures" >
                المحاضرات

              </Link> 
                </li>

                <li className="w-full px-6 py-4 text-2xl font-semibold uppercase duration-500 hover:bg-[#444f59] ">
                <Link to="/quiz" > التقييمات </Link>

                </li>

                <li className="w-full px-6 py-4 text-2xl font-semibold uppercase duration-500 hover:bg-[#444f59] ">
                <Link to="/summaries" >  الملخصات </Link>
                </li>


              </ul>
            </div>


          </button>
          <h1 className="flex gap-2  py-4 pr-6 text-2xl font-bold  cursor-pointer md:ml-0 flew-row 
           text-[#3218BF] ">
            <Link to='/' className='text-none text-[#7b6796]'>
ميراث النبوة

            </Link>
          </h1>
        </div>
      </nav>
    </div>
  )
}

export default Header
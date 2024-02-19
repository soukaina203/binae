import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'; 
import Video from './Video';

function Welcome() {
  return (
    <Zoom>{/*Using Zoom Effect*/}
<section className="flex items-center justify-center w-full h-screen overflow-hidden bg-gray-900 ">
{/* <video src= 
"Videos/Home.mp4"
            autoplay="{true}" loop muted 
            className="absolute z-[-1] opacity-35 w-auto min-w-full opacity-60 min-h-full max-w-none"> 
        </video> */}
        <img  src='icons/b2.jpg'  alt=''  className="absolute  z-[-1]  w-auto min-w-full min-h-full max-w-none"/>
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
     
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-5xl text-white">طبتم وطابت أوقاتكم وأعماركم أُهيل البناء المُبارك</h1>
        <p class="mb-8 text-lg font-semibold  lg:text-2xl
         sm:px-16 xl:px-48 text-gray-300">قال 
         الأعمش رحمهُ الله: لا أعلمُ للهِ قوماً أفضلَ من قومٍ يطلُبون الحَديث ويُحيون هذه السُّنة؛ كم أنتم في النَّاس لأنتم أقلُّ من الذهب
         </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/home" class="inline-flex justify-center cursor-pointer items-center py-3 px-5 text-base  text-center text-white 
            rounded-lg bg-primary-700  font-semibold hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              تصفح الدروس 
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <Link to="/lectures" class="inline-flex   cursor-pointer justify-center items-center py-3 px-5 text-base font-medium 
            text-center  rounded-lg 
            text-white  bg-gray-700 ">
                <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 
                  1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                تصفح المحاضرات 

            </Link>  
        </div>
      
    </div>
</section>
<Video />


</Zoom>
  )
}

export default Welcome
import React from 'react'

function Video() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen '>

<div className='flex flex-col items-center justify-center '>

            <h1 className='text-4xl mb-4 font-bold leading-none tracking-tight md:text-5xl lg:text-5xl text-[#7b6796]'> كيف أستفيد من هذا الموقع ؟</h1>
            <p class=" text-lg font-normal text-center  lg:text-2xl
         sm:px-16 xl:px-48 text-gray-500">
                لإشارة هذا الموقع ليس تابعا لبرنامج البناء المنهجي إنما هو مبادرة من أحد طلاب البناء المنهجي
            </p>
</div>

            <video src="Videos/welcome.mp4"
                controls

                poster='thumbnail.jpg' className='w-full h-[25rem] lg:w-[48rem] lg:h-[29rem]'></video>

        </div>
    )
}

export default Video

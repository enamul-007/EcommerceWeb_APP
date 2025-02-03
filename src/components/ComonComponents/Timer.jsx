import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, settime] = useState(3 * 24 * 60 * 60 * 1000);
    useEffect(() => {
        setTimeout(() => {
            time(time - 1000)
        }, 1000)
    }, [time]);

    // fomate the countDown date 

    return (
        <>
            <div className='flex items-center gap-x-3'>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Days</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>03</h1>
                            <span className='text-orange_color text-[25px] font-bold pl-2 '>:</span>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Hours</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>23</h1>
                            <span className='text-orange_color text-[25px] font-bold pl-2 '>:</span>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Minutes</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>19</h1>
                            <span className='text-orange_color text-[25px] font-bold pl-2 '>:</span>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Seconds</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>56</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Timer
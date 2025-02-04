import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, settime] = useState(3 * 24 * 60 * 60 * 1000);

    useEffect(() => {
        setTimeout(() => {
            settime(time - 1000)
        }, 1000);
    }, [time]);

    // fomate the countDown date 

    const formateDate = (miliSecond) => {
        let total_Second = parseInt(Math.floor(miliSecond / 1000));
        let total_Minute = parseInt(Math.floor(total_Second / 60));
        let total_hour = parseInt(Math.floor(total_Minute / 60));
        let days = parseInt(Math.floor(total_hour / 24));
        let Seconds = parseInt(Math.floor(total_Second % 60));
        let Minutes = parseInt(Math.floor(total_Minute % 60));
        let hours = parseInt(Math.floor(total_hour % 60));
        return { days, hours, Minutes, Seconds };
    };
    const { days, hours, Minutes, Seconds } = formateDate(time);
    return (
        <>
            <div className='flex items-center gap-x-3'>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Days</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>
                                {days}
                            </h1>
                            <span className='text-orange_color text-[25px] font-bold pl-2 '>:</span>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Hours</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>
                                {hours}
                            </h1>
                            <span className='text-orange_color text-[25px] font-bold pl-2 '>:</span>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Minutes</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>
                                {Minutes}
                            </h1>
                            <span className='text-orange_color text-[25px] font-bold pl-2 '>:</span>
                        </div>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-col items-start' >
                        <span className='font-semibold font-Poppins text-[12px] text-black_text_color'>Seconds</span>

                        <div className='flex gap-x-2'>
                            <h1 className='font-bold font-Inter text-[32px] text-black_text_color'>
                                {Seconds}
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Timer
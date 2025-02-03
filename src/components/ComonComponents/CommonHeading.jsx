import React from 'react'

const CommonHeading = ({ title , description }) => {
    return (
        <>
         <div>

            <div>
                    <div className='flex items-center'>
                        <span className='h-[40px] w-[20px] bg-orange_color block rounded  '></span>
                        <span className='pl-4 font-semibold font-Poppins text-[16px] text-orange_color'>{title ? title :"Today’s"}</span>
                    </div>
                    <div className='pt-6'>
                        <h4 className='font-Inter text-[36px] font-semibold text-black_text_color '>{description ? description :"Flash Sales "}</h4>
                    </div>
            </div>
         </div>
        </>
    )
}

export default CommonHeading

import React from 'react'
import CommonHeading from '../../../components/ComonComponents/CommonHeading'
import Timer from '../../../components/ComonComponents/Timer'

const FlashSale = () => {
    return (
        <>

            <div className='mt-[140px] mb-[60px]'>
                <div className='container'>
                    <div className='flex items-end gap-[90px]'>
                        <CommonHeading title={"Today’s"} description={"Flash Sales"} />
                        <Timer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale
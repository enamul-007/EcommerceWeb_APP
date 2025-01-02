import React from 'react'

const Header = () => {
  return (
    <div className='py-3 bg-black_color'>
        <div className="container">

            <div className='flex items-start justify-between'>
                <div></div>
                <div className="">
                    <h2 className='text-white_text_color font-Poppins text-[14px] font-normal'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </h2>
                </div>
                <div className="">
                    <select name="" id="" className='bg-transparent text-white_text_color font-Poppins font-normal text-[14px]'>
                        <option value="">English</option>
                        <option value="">Bangla</option>
                        <option value="">Arabic</option>
                        <option value="">Hindi</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import React, { useState } from 'react'
import { category } from '../../../../Data/Data'
import { FaAngleRight, } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import Slider from 'react-slick'
import Bnnarimg from '../../../assets/Banner/Banner.jpg'


const index = () => {

    const [currentSlide, setcurrentSlide] = useState(0);



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        appendDots: dots => (
            <div
                style={{
                    position: 'absolute',
                    left: "50%",
                    bottom: "5%",
                    borderRadius: "10px",
                    padding: "10px",
                    transform: "translateX(-50%)",


                }}
            >
                <ul style={{ margin: '0px', display: "flex" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (

            i == currentSlide ? (< div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#DB4444",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "12px"

            }}   >


            </ div>) : (< div style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#ffffff",
                opacity: "0.5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "12px"

            }}   >


            </ div>)


        ),

        afterchange: function (currentSlide) {

            setcurrentSlide(currentSlide)
        },



    };

    return (

        <>
            <div className='container'>
                <div className='flex justify-between '>
                    <div className='w-[25%]'>
                        <div>
                            <ul className=' pt-10 border-r-[1px] border-r-border_color'>
                                {category?.map(item => (
                                    <div
                                        className='flex items-center justify-between transition-all rounded cursor-pointer hover:bg-border_color hover:pl-4'
                                        key={item.id}
                                    >
                                        <li className='font-normal my-4 font-Poppins text-[16px] text-black_text_color '>
                                            {item.category}
                                        </li>
                                        {item.subCategory && (
                                            <span className='pr-8'>
                                                <FaAngleRight />
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='w-[75%] h-[344px]  pl-[45px] pt-10 '>
                        <div className='slider-container '>
                            <Slider {...settings}>
                                {[...new Array(10)].map((_, index) => (
                                    <div key={index}>
                                        <img
                                            src={Bnnarimg}
                                            alt={Bnnarimg}
                                            className='object-cover w-full h-full'
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index

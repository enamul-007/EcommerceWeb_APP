import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { IoIosStarOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const NavItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "Contact",

    },
    {
      id: 3,
      item: "About",

    },
    {
      id: 4,
      item: "Sign Up",

    },

  ];

  const [account, setAccount] = useState(false);
  const handleAccount = () => {
    setAccount(!account)
  }

  return (
    <div className="pt-10 pb-4 border-b-[1.5px] border-b-border_color">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold font-Inter text-black_text_color">Exclusive</h1>
          </div>
          <div>
            <ul className="flex justify-center gap-x-12">
              {NavItem?.map((nav) => (
                <li key={Map.id} className="navHover">

                  <NavLink
                    to="/nav"
                    className={({
                      isPending, isActive
                    }) => isPending ? "text-black_text_color font-Poppins font-normal text-[16px]" : isActive ? "text-red-500 font-Poppins font-normal text-[16px]" : "text-black_text_color font-Poppins font-normal text-[16px]"
                    }>
                    {nav.item}
                  </NavLink>
                </li>
              ))}

            </ul>
          </div>
          <div className="relative flex items-center justify-between basis-1/4">
            <div className="" >
              <input type="text" className=" py-2 px-2 w-[243px] h-[38px] bg-[#787c7f2c] rounded font-Poppins font-normal text-xs text-black_text_color "
                placeholder="What are you looking for?" />
              <span className="absolute -translate-y-1/2 top-1/2 right-[41%]"><IoSearchOutline /></span>
            </div>

            <div className="flex items-center justify-between gap-4 px-6 ">
              <span>
                <FaRegHeart className="text-2xl cursor-pointer" />
              </span>
              <span className="amount">
                <FiShoppingCart className="text-2xl cursor-pointer" />
              </span>
              {/* drop down mmenu */}
              <div>
                <span className="relative z-50"
                  onClick={handleAccount}>
                  <RiUser3Line className="w-8 h-8 p-1 text-2xl rounded-full cursor-pointer text-white_text_color bg-orange_color" />
                </span>

                {account && (<div className="  absolute h-[208px] w-[225px] right-0 top-[100%] backdrop-blur bg-black_color opacity-[.4]	 rounded ">
                  <div className="p-5 ">

                    <div className="flex py-2  items-center px-2 font-medium cursor-pointer text-white_text_color font-Poppins transition-all hover:basis-[100%] hover:rounded hover:bg-white_color hover:text-black  ">
                      <span className="text-xl "><RiUser3Line /></span>
                      <h5 className="pl-4  text-[14px]">Manage My Account</h5>
                    </div>

                    <div className="flex py-2  items-center px-2 font-medium cursor-pointer text-white_text_color font-Poppins transition-all hover:basis-[100%] hover:rounded hover:bg-white_color hover:text-black  ">
                      <span className="text-xl "><LuShoppingBag /></span>
                      <h5 className="pl-4  text-[14px]">My Order</h5>
                    </div>

                    <div className="flex py-2  items-center px-2 font-medium cursor-pointer text-white_text_color font-Poppins transition-all hover:basis-[100%] hover:rounded hover:bg-white_color hover:text-black  ">
                      <span className="text-xl "><ImCancelCircle /></span>
                      <h5 className="pl-4  text-[14px]">My Cancellations</h5>
                    </div>

                    <div className="flex py-2  items-center px-2 font-medium cursor-pointer text-white_text_color font-Poppins transition-all hover:basis-[100%] hover:rounded hover:bg-white_color hover:text-black  ">
                      <span className="text-xl "><IoIosStarOutline /></span>
                      <h5 className="pl-4  text-[14px]">My Reviews</h5>
                    </div>

                    <div className="flex py-2  items-center px-2 font-medium cursor-pointer text-white_text_color font-Poppins transition-all hover:basis-[100%] hover:rounded hover:bg-white_color hover:text-black  ">
                      <span className="text-xl "><BiLogOut /></span>
                      <h5 className="pl-4  text-[14px]">Logout</h5>
                    </div>

                  </div>
                </div>)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

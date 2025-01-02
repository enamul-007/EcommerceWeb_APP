import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import {  IoSearchOutline } from "react-icons/io5";
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

  ]
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
              <input type="text" className=" py-2 w-[243px] h-[38px] bg-[#787c7f2c] rounded font-Poppins font-normal text-xs text-black_text_color "
                placeholder="What are you looking for?" />
              <span className="absolute -translate-y-1/2 top-1/2 right-[41%]"><IoSearchOutline /></span>
            </div>

            <div className="flex justify-between gap-4 px-6 ">
              <span>
                <FaRegHeart className="text-xl" />
              </span>
              <span className="amount">
                <FiShoppingCart className="text-xl" />
              </span>
              <span>
                <RiUser3Line className="text-xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

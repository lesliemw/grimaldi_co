"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";

import Link from "next/link";
import SearchBar from "./SearchBar";
import CartPopper from "../Cart/CartPopper";
import AccountDropdownMenu from "../Accounts/AccountDropdownMenu";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function isOpenCartToggle() {
    setIsOpenCart(() => !isOpenCart);
  }

  function isOpenSidebarToggle() {
    setIsOpenSidebar(!isOpenSidebar);
  }

  return (
    <header className="grid grid-cols-3 w-full lg:p-3 p-1  items-center font-themeFont font-extralight bg-white fixed top-0 z-10 justify-items-center">
      <div className="flex items-center ml-5 cursor-pointer ">
        <RxHamburgerMenu
          className="m-2 text-sm md:text-md lg:text-2xl"
          onClick={isOpenSidebarToggle}
        />
        <span>Menu</span>
        {isOpenSidebar && (
          <Sidebar
            isOpenSidebar={isOpenSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
            isOpenSidebarToggle={isOpenSidebarToggle}
          />
        )}
        <SearchBar />
      </div>
      <div>
        <Link href="/">
          <img
            className="lg:w-80 w-52  max-h-24 "
            src="/fullBranding.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex sm:mr-5 ">
        <AccountDropdownMenu />

        <button onClick={isOpenCartToggle} className="flex sm:p-2 items-center">
          <IoBagHandleOutline className="md:m-2 text-xl md:text-md lg:text-2xl" />
          <span className="invisible sm:visible">Cart</span>
        </button>
        {isOpenCart && (
          <CartPopper
            setIsOpenCart={setIsOpenCart}
            isOpenCart={isOpenCart}
            isOpenCartToggle={isOpenCartToggle}
          />
        )}
      </div>
    </header>
  );
}

export default Header;

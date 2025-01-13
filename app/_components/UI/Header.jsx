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
    <header className="grid grid-cols-3 w-full lg:px-6 px-4 py-2 items-center font-themeFont font-extralight bg-white fixed top-0 z-10 justify-items-center shadow-sm">
      {/* Left Section: Hamburger Menu & Search Bar */}
      <div className="flex items-center gap-2 w-full cursor-pointer">
        <RxHamburgerMenu
          className="text-lg sm:text-xl lg:text-2xl"
          onClick={isOpenSidebarToggle}
        />
        <span className="hidden sm:inline">Menu</span>
        {isOpenSidebar && (
          <Sidebar
            isOpenSidebar={isOpenSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
            isOpenSidebarToggle={isOpenSidebarToggle}
          />
        )}
        <div>
          <SearchBar />
        </div>
      </div>

      {/* Center Section: Branding */}
      <div className="justify-self-center ">
        <Link href="/">
          <img
            className="lg:w-64 w-44 max-h-16"
            src="/fullBranding.png"
            alt="Brand Logo"
          />
        </Link>
      </div>

      {/* Right Section: Account & Cart */}
      <div className="flex items-center	gap-4">
        <AccountDropdownMenu />
        <button
          onClick={isOpenCartToggle}
          className="flex items-center  text-gray-700 hover:text-gray-900"
        >
          <IoBagHandleOutline className="text-xl sm:text-2xl" />
          <span className="hidden sm:inline ml-2">Cart</span>
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

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { HiXMark } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import Link from "next/link";
import { useLogout } from "../../_api/useLogout";
import { useUser } from "../../_api/useUser";

function Sidebar({ isOpenSidebar, isOpenSidebarToggle }) {
  const { currentUser } = useUser();
  const { fname, lname } = currentUser || {};
  const { logout, isLoading } = useLogout();

  // Memoize the toggle function to avoid unnecessary re-renders
  const handleClick = useCallback(() => {
    isOpenSidebarToggle();
  }, [isOpenSidebarToggle]);

  return (
    <Transition show={isOpenSidebar} as={Fragment} onClose={handleClick}>
      <Dialog onClose={handleClick} as="div" className="relative z-20">
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 font-themeFont overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-200 sm:duration-300"
                enterFrom="translate-x-0"
                enterTo="translate-x-full"
                leave="transform transition ease-in-out duration-200 sm:duration-300"
                leaveFrom="translate-x-full"
                leaveTo="translate-x-0"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex flex-col overflow-y-scroll h-full bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          {currentUser
                            ? `Welcome, ${fname} ${lname}`
                            : "Welcome"}
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={isOpenSidebarToggle}
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <HiXMark className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 flow-root px-4 py-6 sm:px-6">
                        {/* Menu for Women */}
                        <DialogTitle className="text-xl font-medium text-gray-900">
                          Women
                        </DialogTitle>
                        <div className="my-3">
                          <ul>
                            <Link
                              href="/products/womens_tops"
                              onClick={handleClick}
                            >
                              <li>Tops</li>
                            </Link>
                            <Link
                              href="/products/womens_trousers"
                              onClick={handleClick}
                            >
                              <li>Trousers</li>
                            </Link>
                            <Link
                              href="/products/womens_dresses"
                              onClick={handleClick}
                            >
                              <li>Dresses</li>
                            </Link>
                            <Link
                              href="/products/womens_handbags"
                              onClick={handleClick}
                            >
                              <li>Handbags</li>
                            </Link>
                            <Link
                              href="/products/womens_jackets"
                              onClick={handleClick}
                            >
                              <li>Jackets</li>
                            </Link>
                            <Link
                              href="/products/womens_shoes"
                              onClick={handleClick}
                            >
                              <li>Shoes</li>
                            </Link>
                          </ul>
                        </div>

                        {/* Menu for Men */}
                        <DialogTitle className="text-xl font-medium text-gray-900">
                          Men
                        </DialogTitle>
                        <div className="my-3">
                          <ul>
                            <li>Tops</li>
                            <li>Trousers</li>
                            <li>Jackets</li>
                            <li>Belts</li>
                            <li>Shoes</li>
                          </ul>
                        </div>

                        {/* Menu for Accessories */}
                        <DialogTitle className="text-xl font-medium text-gray-900">
                          Accessories
                        </DialogTitle>
                        <div className="my-3">
                          <ul>
                            <li>Jewelry</li>
                            <li>Homewares</li>
                            <li>Toiletries</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Account and Logout Buttons */}
                    <Link href="/account" onClick={isOpenSidebarToggle}>
                      <button className="flex items-center ml-3">
                        <GoPerson className="m-2 text-sm md:text-md lg:text-2xl" />
                        <span>Account Details</span>
                      </button>
                    </Link>

                    {currentUser ? (
                      <button
                        className="flex ml-3 items-center"
                        onClick={logout}
                        disabled={isLoading}
                      >
                        <IoIosLogOut className="m-3 text-sm md:text-md lg:text-2xl" />
                        <span>Sign Out</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleClick}
                        className="flex ml-3 items-center"
                      >
                        <IoIosLogIn className="m-3 text-sm md:text-md lg:text-2xl" />
                        <Link href="/user/login">
                          <span>Sign In</span>
                        </Link>
                      </button>
                    )}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Sidebar;

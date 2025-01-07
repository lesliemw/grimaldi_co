import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { HiXMark } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import Link from "next/link";
import { useAuth } from "../../_context/userContext";
import { useLogout } from "../../_api/useLogout";

function Sidebar({ isOpenSidebar, isOpenSidebarToggle }) {
  const { user } = useAuth();
  const { logout, isLoading } = useLogout();

  function handleClick() {
    isOpenSidebarToggle();
  }

  return (
    <Transition
      show={isOpenSidebar}
      as={Fragment}
      onClose={isOpenSidebarToggle}
    >
      <Dialog as="div" className="relative z-20">
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0  font-themeFont overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-0"
                enterTo="translate-x-full"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-full"
                leaveTo="translate-x-0"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex flex-col overflow-y-scroll h-full bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">
                          {user
                            ? `Welcome, ${user.user_metadata.fname}`
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
                        <DialogTitle className="text-xl font-medium text-gray-900">
                          Women
                        </DialogTitle>
                        <div className="my-3">
                          <ul>
                            <li>Tops</li>
                            <li>Trousers</li>
                            <li>Dresses</li>
                            <li>Handbags</li>
                            <li>Jackets</li>
                            <li>Shoes</li>
                          </ul>
                        </div>

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

                        <DialogTitle className="text-xl font-medium text-gray-900">
                          Accessories
                        </DialogTitle>
                        <div className="my-3">
                          <ul>
                            <li>Jewelry</li>
                            <li>Scarves</li>
                            <li>Homewares</li>
                            <li>Toiletries</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <Link href="/account" onClick={isOpenSidebarToggle}>
                      <button className="flex items-center ml-3">
                        <GoPerson className="m-2 text-sm md:text-md lg:text-2xl" />
                        <span>Account Details</span>
                      </button>
                    </Link>

                    {user ? (
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

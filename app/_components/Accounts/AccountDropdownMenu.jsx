"use client";
import { GoPerson } from "react-icons/go";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { useAuth } from "../../_context/authContext";
import { useLogout } from "../../_api/useLogout";

function AccountDropdownMenu() {
  const { user } = useAuth();
  const { logout, isLoading } = useLogout();
  return (
    <Menu as="div" className="relative inline-block font-extralight text-left">
      <div>
        <MenuButton className="w-full font-themeFont justify-center gap-x-1.5 rounded-md bg-white md:px-3 py-2 text-gray-700 ring-inset flex md:p-2 items-center">
          <GoPerson className="m-2 text-xl md:text-md lg:text-2xl" />
          <span className="invisible sm:visible">Account</span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="py-1 bg-white">
          <MenuItem>
            <Link
              href="/orders"
              className="data-[active]:bg-gray-100 data-[active]:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
            >
              Orders
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/wishlist"
              className="data-[active]:bg-gray-100 data-[active]:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
            >
              Wish List
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/account"
              className="data-[active]:bg-gray-100 data-[active]:text-gray-900 text-gray-700 block px-4 py-2 text-sm"
            >
              Account Settings
            </Link>
          </MenuItem>
          <MenuItem>
            {user ? (
              <button
                onClick={logout}
                disabled={isLoading}
                className="data-[active]:bg-gray-100 data-[active]:bg-gray-100text-gray-900  text-gray-700
                  block w-full px-4 py-2 text-left text-sm"
              >
                Sign out
              </button>
            ) : (
              <button
                className="data-[active]:bg-gray-100 data-[active]:bg-gray-100text-gray-900  text-gray-700
                  block w-full px-4 py-2 text-left text-sm"
              >
                <Link href="/user/login">Sign in</Link>
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default AccountDropdownMenu;

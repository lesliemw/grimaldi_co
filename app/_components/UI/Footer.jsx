"use client";

import { useState } from "react";
import toast from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    toast.success(
      `You have successfully signed up for our newsletter with ${email}.`
    );
  }

  return (
    <footer className="bg-gray-50 font-themeFont w-full py-6 px-4  bottom-0">
      <div className="px-4 pt-3 pb-4  -mx-4 ">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl text-left inline-block font-semibold text-gray-800">
            Sign up to our newsletter.
          </h2>
          <p className="text-gray-700 text-xs pl-px">
            Get all of the latest offers straight to your inbox.
          </p>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <input
                type="email"
                className="w-full px-2 py-4 mr-2 h-10  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-indigo-500"
                required
                name="email"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-indigo-500 hover:bg-indigo-500 text-gray-200 px-5 py-2 rounded shadow h-10 w-40">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <p className="text-blue-500">
          &copy;{new Date().getFullYear()} Grimaldi & Co.
        </p>

        <div className="flex items-center"></div>
      </div>
    </footer>
  );
}

export default Footer;

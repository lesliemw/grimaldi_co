"use client";
import { IoDiamondOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { useSelector } from "react-redux";

function CustomerDetails() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="bg-gray-50 w-full h-fit sticky top-[82px] xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl  font-semibold leading-5 text-gray-800">
        Customer Details
      </h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-base  font-semibold leading-4 text-left text-gray-800">
                {user.fname} {user.lname}
              </p>
              <p className="text-sm flex items-center text-gray-600">
                <span className="m-1">
                  <IoDiamondOutline />
                </span>
                {"  "}
                VIP Member
              </p>
            </div>
          </div>

          <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <BsEnvelope />

            <p className="cursor-pointer text-sm leading-5 ">{user.email}</p>
          </div>
        </div>
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                Shipping Address
              </p>
              <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                {user.streetAddress}
                <br /> {user.city} , {user.county}
              </p>
              <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"></p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center md:justify-start md:items-start">
            <button className="mt-6 md:mt-0  py-5 rounded hover:bg-indigo-600 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 border border-indigo-500 font-medium w-96 2xl:w-full text-base  leading-4 text-gray-50">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;

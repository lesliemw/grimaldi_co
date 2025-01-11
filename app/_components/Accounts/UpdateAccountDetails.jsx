"use client";

import { useState } from "react";
import { useUser } from "../../_api/useUser";
import { useAuth } from "../../_context/userContext";
import Link from "next/link";
import { useUpdateUser } from "../../_api/useUpdateUser";

export default function UpdateAccountDetails() {
  const { currentUser } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600 text-lg">
          Loading your account details...
        </div>
      </div>
    );
  }
  const {
    fname = "",
    lname = "",
    streetAddress = "",
    city = "",
    county = "",
    country = "",
    postalCode = "",
    email = "",
    vipStatus = false,
    notificationsOrders = false,
    notificationsOffers = false,
  } = currentUser;

  const [updateDetails, setUpdateDetails] = useState({
    fname: currentUser.fname,
    lname: currentUser.lname,
    streetAddress: currentUser.streetAddress,
    city: currentUser.city,
    county: currentUser.county,
    country: currentUser.country,
    postalCode: currentUser.postalCode,
    notificationsOffers: currentUser.notificationsOffers,
    notificationsOrders: currentUser.notificationsOrders,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setUpdateDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function handleUpdate(e) {
    e.preventDefault();

    updateUser({
      fname: updateDetails.fname,
      lname: updateDetails.lname,
      vipStatus: updateDetails.vipStatus,
      notificationsOrders: updateDetails.notificationsOrders,
      notificationsOffers: updateDetails.notificationsOffers,
      streetAddress: updateDetails.streetAddress,
      city: updateDetails.city,
      county: updateDetails.county,
      postalCode: updateDetails.postalCode,
      country: updateDetails.country,
    });
  }

  return (
    <form
      className="m-16 lg:mx-60 lg:mt-20 place-center font-themeFont w-auto"
      onSubmit={handleUpdate}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Let's Update Your Account Details
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  defaultValue={fname}
                  autoComplete="given-name"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  defaultValue={lname}
                  autoComplete="family-name"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={email}
                  disabled
                  autoComplete="email"
                  className="disabled:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  defaultValue={streetAddress}
                  autoComplete="street-address"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  defaultValue={city}
                  autoComplete="address-level2"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="county"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                County / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="county"
                  defaultValue={county}
                  id="county"
                  autoComplete="address-level1"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  defaultValue={postalCode}
                  autoComplete="postal-code"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 mt-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                defaultValue={country}
                autoComplete="country-name"
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer"
              >
                <option name="Ireland" value="Ireland">
                  Ireland
                </option>
                <option name="Northern Ireland" value="Northern Ireland">
                  Northern Ireland
                </option>
                <option name="Great Britain" value="Great Britain">
                  Great Britain
                </option>
                <option name="France" value="France">
                  France
                </option>
                <option name="Spain" value="Spain">
                  Spain
                </option>
                <option name="Italy" value="Italy">
                  Italy
                </option>
                <option name="Germany" value="Germany">
                  Germany
                </option>
                <option name="USA" value="USA">
                  USA
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We&apos;ll always let you know about important changes, but you pick
            what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                By Email
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="notificationsOrders"
                      name="notificationsOrders"
                      type="checkbox"
                      defaultValue={notificationsOrders}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="notificationsOrders"
                      className="font-medium text-gray-900"
                    >
                      Order Details
                    </label>
                    <p className="text-gray-500">
                      Get notified when a there are changes to order details
                      (i.e when an item has shipped).
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="notificationsOffers"
                      name="notificationsOffers"
                      type="checkbox"
                      defaultValue={notificationsOffers}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Offers
                    </label>
                    <p className="text-gray-500">
                      Get notified of the latest offers.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="m-6 flex items-center justify-end gap-x-6 ">
            <Link href="/account">
              <button
                type="button"
                className="text-sm font-semibold cursor-pointer leading-6 text-gray-900"
              >
                Cancel
              </button>
            </Link>

            <button
              type="submit"
              disabled={isUpdating}
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

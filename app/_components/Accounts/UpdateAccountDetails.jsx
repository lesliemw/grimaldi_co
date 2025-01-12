"use client";

import { useState } from "react";
import { useUser } from "../../_api/useUser";
import { useUpdateUser } from "../../_api/useUpdateUser";
import Link from "next/link";

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

  const initialDetails = {
    fname: currentUser.fname || "",
    lname: currentUser.lname || "",
    streetAddress: currentUser.streetAddress || "",
    city: currentUser.city || "",
    county: currentUser.county || "",
    country: currentUser.country || "",
    postalCode: currentUser.postalCode || "",
    notificationsOrders: currentUser.notificationsOrders || false,
    notificationsOffers: currentUser.notificationsOffers || false,
  };

  const [updateDetails, setUpdateDetails] = useState(initialDetails);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdateDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(updateDetails);
  };

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
            {[
              {
                label: "First name",
                name: "fname",
                value: updateDetails.fname,
              },
              { label: "Last name", name: "lname", value: updateDetails.lname },
              {
                label: "Email address",
                name: "email",
                value: currentUser.email,
                disabled: true,
              },
              {
                label: "Street address",
                name: "streetAddress",
                value: updateDetails.streetAddress,
              },
              { label: "City", name: "city", value: updateDetails.city },
              {
                label: "County / Province",
                name: "county",
                value: updateDetails.county,
              },
              {
                label: "Postal code",
                name: "postalCode",
                value: updateDetails.postalCode,
              },
            ].map(({ label, name, value, disabled = false }) => (
              <div
                className={`sm:col-span-${name === "email" ? 3 : 3}`}
                key={name}
              >
                <label
                  htmlFor={name}
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {label}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    disabled={disabled}
                    autoComplete={name}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-pointer px-2 ${
                      disabled
                        ? "disabled:ring-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
                        : ""
                    }`}
                  />
                </div>
              </div>
            ))}
            <div className="sm:col-span-3">
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
                  value={updateDetails.country}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 cursor-pointer"
                >
                  {[
                    "Ireland",
                    "Northern Ireland",
                    "Great Britain",
                    "France",
                    "Spain",
                    "Italy",
                    "Germany",
                    "USA",
                  ].map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
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
            {[
              {
                id: "notificationsOrders",
                label: "Order Details",
                description:
                  "Get notified when there are changes to order details (i.e., when an item has shipped).",
              },
              {
                id: "notificationsOffers",
                label: "Offers",
                description: "Get notified of the latest offers.",
              },
            ].map(({ id, label, description }) => (
              <div className="relative flex gap-x-3" key={id}>
                <div className="flex h-6 items-center">
                  <input
                    id={id}
                    name={id}
                    type="checkbox"
                    checked={updateDetails[id]}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500 checked:bg-indigo-500"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor={id} className="font-medium text-gray-900">
                    {label}
                  </label>
                  <p className="text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="m-6 flex items-center justify-end gap-x-6">
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

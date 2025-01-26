"use client";

import { useUser } from "../../_api/useUser";
import { useAuth } from "../../_context/userContext";
import Link from "next/link";
import { IoDiamond } from "react-icons/io5";

export default function AccountDetails() {
  const { user } = useAuth();
  const { currentUser } = useUser();

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600 text-lg">
          Loading your account details...
        </div>
      </div>
    );
  }

  // Destructure currentUser once to avoid repeating it in render
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

  const accountDetails = [
    { label: "Name", value: `${fname} ${lname}` },
    { label: "Email address", value: email },
    { label: "Street address", value: streetAddress },
    { label: "City", value: city },
    { label: "County / Province", value: county },
    { label: "Postal code", value: postalCode },
    { label: "Country", value: country },
  ];

  const notifications = [
    {
      id: "orderDetails",
      label: "Order Details",
      description:
        "Get notified when there are changes to order details (i.e., when an item has shipped).",
      checked: notificationsOrders,
    },
    {
      id: "offers",
      label: "Offers",
      description: "Get notified of the latest offers.",
      checked: notificationsOffers,
    },
  ];

  return (
    <div className="flex flex-col items-center mb-24 mt-20 px-4 sm:px-6 md:px-8 font-themeFont w-full">
      <div className="w-full max-w-4xl space-y-8">
        {/* Account Details */}
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">
            Account Details
          </h2>

          <div className="mt-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {accountDetails.map(({ label, value }, index) => (
              <div key={index} className="text-center flex-grow sm:text-left">
                <label
                  htmlFor={label.toLowerCase().replace(/\s+/g, "-")}
                  className="block text-xs font-medium leading-6 mt-2 text-gray-400"
                >
                  {label}
                </label>
                <div className="mb-4 sm:border-b rounded">
                  <h4>{value}</h4>
                </div>
              </div>
            ))}
            {vipStatus && (
              <div className="col-span-full sm:col-span-2 md:col-span-1 text-center sm:text-left">
                <label className="block text-xs font-medium leading-6 text-gray-400">
                  VIP Status
                </label>
                <div className="mt-2">
                  <h4 className="flex gap-2 items-center justify-center sm:justify-start sm:border-b">
                    <IoDiamond /> VIP Member
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notifications */}
        <div className="border-b border-gray-900/10 pb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-left">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 text-left">
            We&apos;ll always let you know about important changes, but you pick
            what else you want to hear about.
          </p>

          <div className="mt-6 space-y-6">
            {notifications.map(({ id, label, description, checked }) => (
              <div className="relative flex px-2 justify-left gap-4" key={id}>
                <div className="flex h-6 items-center">
                  <input
                    id={id}
                    name={id}
                    type="checkbox"
                    disabled
                    checked={checked}
                    className="cursor-not-allowed h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="text-sm leading-6 text-left">
                  <label htmlFor={id} className="font-medium text-gray-900">
                    {label}
                  </label>
                  <p className="text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center sm:justify-end">
            <Link href="/account/updateAccountDetails">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Edit Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

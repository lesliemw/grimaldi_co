"use client";
import { useUser } from "../../_api/useUser";
import { useAuth } from "../../_context/userContext";
import Link from "next/link";
import { Spinner } from "../UI/Spinner";

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
  return (
    <div className="mb-24 mt-10 p-8 font-themeFont flex justify-center w-full	">
      <div className="space-y-8">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Account Details
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                id="first-name"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <h2>
                  {fname} {lname}
                </h2>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                id="email"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <h4>{email}</h4>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                id="street-address"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <h4>{streetAddress}</h4>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                id="city"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <h4>{city}</h4>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                id="region"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                County / Province
              </label>
              <div className="mt-2">
                <h4>{county}</h4>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                id="postal-code"
                className="block text-xs font-medium leading-6 text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-2">
                <h4>{postalCode}</h4>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 mt-2">
            <label
              htmlFor="country"
              id="country"
              className="block text-xs font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <h4>{country}</h4>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We&apos;ll always let you know about important changes, but you pick
            what else you want to hear about.
          </p>

          <div className="mt-6 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                By Email
              </legend>
              <div className="mt-6 space-y-2">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="orderDetails"
                      name="orderDetails"
                      type="checkbox"
                      disabled
                      checked={notificationsOrders}
                      className="cursor-not-allowed h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="orderDetails"
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
                      id="offers"
                      name="offers"
                      type="checkbox"
                      disabled
                      checked={notificationsOffers}
                      className="cursor-not-allowed h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
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
          <div className="m-2 flex items-center justify-end gap-x-6 ">
            <Link href="/account/updateAccountDetails">
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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

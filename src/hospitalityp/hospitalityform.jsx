import React from "react";

export default function Hospitalityform() {
  return (
    <form>
      <div className="space-y-10 mb-10">
        <div className="border-b border-green-900/10 pb-12 mt-10">
          <h2 className="text-3xl font-semibold leading-6 text-gray-900">
            Hospitality Information
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-10">
            <div className="sm:col-span-3 text-left">
              <label
                htmlFor="purdate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Purchase/Service Availed
              </label>
              <div className="mt-2">
                <input
                  required
                  name="purdate"
                  placeholder="purdate"
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div className="sm:col-span-3 text-left">
              <label
                htmlFor="amt"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount Paid
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="amt"
                  type="amt"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 text-left">
              <label
                htmlFor="service"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Availed Type
              </label>
              <div className="mt-2">
                <select
                  id="service"
                  name="service"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Food </option>
                  <option>Hotel</option>
                  <option>Party Booking</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white bg-red-500 rounded-md px-3 py-2 "
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

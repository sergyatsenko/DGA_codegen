// components/SearchResults.tsx
import React from "react";
import Link from "next/link";

const SearchResultsSS = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <div className="text-3xl font-bold">DGA</div>
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="DGA"
            className="w-full p-2 rounded-md text-gray-900"
          />
          <button className="absolute right-0 top-0 p-2">
            <img
              src="/search-icon-placeholder.png"
              alt="Search"
              className="w-6 h-6"
            />
          </button>
        </div>
      </header>

      <div className="text-center mb-6">
        <p>
          If you are trying to contact a DGA member,{" "}
          <span className="text-yellow-500">
            <Link href="#">Click here to use the online Member Directory.</Link>
          </span>
        </p>
      </div>

      <div className="mb-4 text-gray-400">Results 1-10 of 22274</div>

      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-md flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-700 rounded-md flex-shrink-0">
            <img
              src="/placeholder.png"
              alt="Western AD/SM/PA Council"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Western AD/SM/PA Council</h3>
            <p className="text-sm text-gray-400">
              ...erson meeting, please RSVP by emailing ADSPMAPWest@dga.org to
              be placed on the live attendance list. You...
            </p>
          </div>
        </div>
        {/* Repeat the above block for each search result */}

        <div className="bg-gray-800 p-4 rounded-md flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-700 rounded-md flex-shrink-0">
            <img
              src="/placeholder.png"
              alt="Western AD/SM/PA Council"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Western AD/SM/PA Council</h3>
            <p className="text-sm text-gray-400">
              ...erson meeting, please RSVP by emailing ADSPMAPWest@dga.org to
              be placed on the live attendance list. You...
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-md flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-700 rounded-md flex-shrink-0">
            <img
              src="/placeholder.png"
              alt="Eastern AD/UPM Council"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Eastern AD/UPM Council</h3>
            <p className="text-sm text-gray-400">
              ...erson meeting, please RSVP by emailing ADUPMEast@dga.org for
              last-minute registrations or assistance. You...
            </p>
          </div>
        </div>
        {/* Repeat for other results */}
      </div>

      <nav className="flex justify-center mt-8 space-x-2">
        {[...Array(10)].map((_, index) => (
          <Link
            href="#"
            key={index}
            className="px-3 py-1 bg-gray-700 rounded-md"
          >
            {index + 1}
          </Link>
        ))}
        <Link href="#" className="px-3 py-1 bg-gray-700 rounded-md">
          &gt;
        </Link>
      </nav>

      <footer className="mt-8 p-4 bg-gray-800 rounded-md text-center text-sm">
        <div>
          © 2011-2024 DGA. All Rights Reserved. Use of this site is bound by the
          terms and conditions set forth by the Directors Guild of America.
        </div>
      </footer>
    </div>
  );
};

export default SearchResultsSS;

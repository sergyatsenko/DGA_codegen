import Link from "next/link";
import React from "react";

const SearchFiltersSS = () => {
  const categories = [
    { name: "Guild News", count: 624 },
    { name: "Press Releases", count: 918 },
    { name: "Membership News", count: 380 },
    { name: "DGA Quarterly", count: 547 },
    { name: "Recent Events", count: 1978 },
    { name: "Upcoming Screenings", count: 13 },
    { name: "Upcoming Events", count: 5 },
    { name: "Meetings", count: 14 },
    { name: "Councils", count: 92 },
    { name: "Committees", count: 44 },
    { name: "Deal Memos & Agreements", count: 22 },
    { name: "Rates", count: 10 },
    { name: "Employers", count: 10 },
    { name: "Resources", count: 18 },
    { name: "Creative Rights", count: 10 },
    { name: "Initiatives", count: 25 },
    { name: "Awards", count: 1204 },
    { name: "Others", count: 66 },
    { name: "Foreign Levies", count: 7 },
    { name: "Theaters", count: 9 },
    { name: "Departments", count: 25 },
    { name: "Visual History", count: 237 },
    { name: "Leaders", count: 1 },
    { name: "Photos - Events", count: 12041 },
    { name: "Photos - News", count: 3974 },
  ];

  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold">SEARCH</h2>
        <p className="text-sm mb-4">
          Select from the Categories below to help refine your search.
        </p>
        <h3 className="text-md font-semibold">CATEGORY FILTERS</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{category.name}</span>
              </label>
              <span>{category.count}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-md font-semibold mt-6">ADVANCED SEARCH OPTIONS</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/search-members" className="hover:underline">
              Search Members by Name/Member Directory
            </Link>
          </li>
          <li>
            <Link href="/search-by-category" className="hover:underline">
              Search Members by Category, Region, Eligibility & More
            </Link>
          </li>
          <li>
            <Link href="/search-awards" className="hover:underline">
              Search DGA Award Winners and Nominees
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchFiltersSS;

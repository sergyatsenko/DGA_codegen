import React from "react";
import Link from "next/link";

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

const advancedSearchOptions = [
  "Search Members by Name/Member Directory",
  "Search Members by Category, Region, Eligibility & More",
  "Search DGA Award Winners and Nominees",
];

const SearchFiltersSS = () => {
  return (
    <div className="bg-black text-white p-6 font-sans">
      <h1 className="text-3xl mb-4">SEARCH</h1>
      <p className="text-gray-300 mb-6">
        Select from the Categories below to help refine your search.
      </p>
      <h2 className="text-xl mb-4 text-indigo-300">CATEGORY FILTERS</h2>
      <div className="space-y-2 mb-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between"
          >
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-3 h-5 w-5" />
              <span>{category.name}</span>
            </label>
            <span className="text-gray-400">{category.count}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl mb-4 text-indigo-300">ADVANCED SEARCH OPTIONS</h2>
      <ul className="space-y-2">
        {advancedSearchOptions.map((option, index) => (
          <li key={index}>
            <Link href="#" className="text-blue-400 hover:underline">
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFiltersSS;

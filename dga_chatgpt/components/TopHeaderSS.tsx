"use client";
import Link from "next/link";
import React, { useState } from "react";

const TopHeaderSS = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center">
          {/* <img src="/dga-logo.png" alt="DGA Logo" className="h-10" /> */}
          <img src="/dga_logo.png" alt="DGA Logo" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/report-earnings" className="text-sm">
            Report Earnings & Pay Dues
          </Link>
          <Link href="/review-residuals" className="text-sm">
            Review Residuals & Earnings
          </Link>
          <Link href="/availability" className="text-sm">
            Availability
          </Link>
          <Link href="/report-work" className="text-sm">
            Report Work
          </Link>
          <Link href="/account-settings" className="text-sm">
            Account Settings
          </Link>
          <button className="bg-gray-700 px-4 py-2 rounded">Sign Out</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            Menu
          </button>
        </div>
      </div>
      <div
        className={`bg-gray-800 ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <Link href="/the-guild" className="py-1 md:py-0">
            The Guild
          </Link>
          <Link href="/employers" className="py-1 md:py-0">
            Employers
          </Link>
          <Link href="/contracts" className="py-1 md:py-0">
            Contracts
          </Link>
          <Link href="/news" className="py-1 md:py-0">
            News
          </Link>
          <Link href="/events" className="py-1 md:py-0">
            Events
          </Link>
          <Link href="/awards" className="py-1 md:py-0">
            Awards
          </Link>
          <Link href="/initiatives" className="py-1 md:py-0">
            Initiatives
          </Link>
          <Link href="/craft" className="py-1 md:py-0">
            Craft
          </Link>
        </div>
      </div>
      <div className="hidden group-hover:block absolute bg-gray-700 text-white w-full mt-1">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/member-directory" className="hover:underline">
              Member Directory
            </Link>
            <Link href="/leaders" className="hover:underline">
              Leaders
            </Link>
            <Link href="/dga-staff" className="hover:underline">
              DGA Staff
            </Link>
            <Link href="/committees" className="hover:underline">
              Committees
            </Link>
            <Link href="/councils" className="hover:underline">
              Councils
            </Link>
            <Link href="/departments" className="hover:underline">
              Departments
            </Link>
            <Link href="/diversity-inclusion" className="hover:underline">
              Diversity & Inclusion
            </Link>
            <Link href="/online-voting" className="hover:underline">
              Online Voting
            </Link>
            <Link href="/theaters" className="hover:underline">
              Theaters
            </Link>
            <Link href="/history" className="hover:underline">
              History
            </Link>
            <Link href="/sustainable-future" className="hover:underline">
              Sustainable Future
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeaderSS;

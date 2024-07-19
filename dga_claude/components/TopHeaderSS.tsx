"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const TopHeaderSS = () => {
  const [isGuildMenuOpen, setIsGuildMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleGuildMenu = () => {
    if (isMobile) {
      setIsGuildMenuOpen(!isGuildMenuOpen);
    }
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="flex items-center">
            {/* <Image
              src="/dga_logo.png"
              alt="DGA Logo"
              width={50}
              height={50}
              className="mr-2"
            /> */}

            <img src="/dga_logo.png" alt="DGA Logo" />
            {/* <span className="text-xl font-bold">DGA</span> */}
          </Link>
          <nav className="hidden md:flex space-x-4 text-sm">
            <Link href="/report-earnings" className="hover:text-gray-300">
              Report Earnings & Pay Dues
            </Link>
            <Link href="/review-residuals" className="hover:text-gray-300">
              Review Residuals & Earnings
            </Link>
            <Link href="/availability" className="hover:text-gray-300">
              Availability
            </Link>
            <Link href="/report-work" className="hover:text-gray-300">
              Report Work
            </Link>
            <Link href="/account-settings" className="hover:text-gray-300">
              Account Settings
            </Link>
          </nav>
          <button className="bg-gray-700 px-4 py-1 rounded text-sm hover:bg-gray-600">
            SIGN OUT
          </button>
        </div>

        {/* Main navigation */}
        <nav className="py-4 border-t border-gray-700">
          <ul className="flex flex-wrap justify-between text-sm">
            <li className="relative group">
              <button
                onClick={toggleGuildMenu}
                onMouseEnter={() => !isMobile && setIsGuildMenuOpen(true)}
                onMouseLeave={() => !isMobile && setIsGuildMenuOpen(false)}
                className="hover:text-gray-300"
              >
                THE GUILD
              </button>
              {isGuildMenuOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 shadow-lg py-2 z-10">
                  <li>
                    <Link
                      href="/member-directory"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      MEMBER DIRECTORY
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/leaders"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      LEADERS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dga-staff"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      DGA STAFF
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/committees"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      COMMITTEES
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/councils"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      COUNCILS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      DEPARTMENTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/diversity-inclusion"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      DIVERSITY & INCLUSION
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/online-voting"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      ONLINE VOTING
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/theaters"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      THEATERS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/history"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      HISTORY
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sustainable-future"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      SUSTAINABLE FUTURE PRO-TIPS
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/employers" className="hover:text-gray-300">
                EMPLOYERS
              </Link>
            </li>
            <li>
              <Link href="/contracts" className="hover:text-gray-300">
                CONTRACTS
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-gray-300">
                NEWS
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gray-300">
                EVENTS
              </Link>
            </li>
            <li>
              <Link href="/awards" className="hover:text-gray-300">
                AWARDS
              </Link>
            </li>
            <li>
              <Link href="/initiatives" className="hover:text-gray-300">
                INITIATIVES
              </Link>
            </li>
            <li>
              <Link href="/craft" className="hover:text-gray-300">
                CRAFT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopHeaderSS;

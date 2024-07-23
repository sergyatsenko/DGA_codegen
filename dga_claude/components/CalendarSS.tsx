import React from "react";
import Image from "next/image";

const CalendarSS = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-4">
        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-white text-2xl font-bold mb-4">CALENDAR</h2>
            <div className="flex justify-end mb-4">
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <div className="flex text-sm">
                  <div className="px-3 py-1 text-white bg-gray-600">M</div>
                  <div className="px-3 py-1 text-white">W</div>
                  <div className="px-3 py-1 text-white">D</div>
                </div>
              </div>
            </div>
            <div className="bg-black text-white p-3 flex justify-between items-center">
              <button className="text-2xl">&lt;</button>
              <span className="text-lg">07/19/24-07/25/24</span>
              <button className="text-2xl">&gt;</button>
            </div>
            <div className="bg-gray-800 text-white p-4 text-center mt-4">
              <p>
                Log in as a Member to see upcoming events, screenings, and
                meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSS;

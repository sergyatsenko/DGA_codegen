"use client";
import React, { useState } from "react";

const CalendarSS = () => {
  const [view, setView] = useState("W"); // Default view is Week (W)

  const changeView = (newView: any) => {
    setView(newView);
  };

  return (
    <div className="bg-gray-900 text-white p-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold">CALENDAR</h2>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => changeView("M")}
            className={`px-4 py-2 ${
              view === "M" ? "bg-gray-700" : "bg-gray-600"
            } rounded`}
          >
            M
          </button>
          <button
            onClick={() => changeView("W")}
            className={`px-4 py-2 ${
              view === "W" ? "bg-gray-700" : "bg-gray-600"
            } rounded`}
          >
            W
          </button>
          <button
            onClick={() => changeView("D")}
            className={`px-4 py-2 ${
              view === "D" ? "bg-gray-700" : "bg-gray-600"
            } rounded`}
          >
            D
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-gray-600 p-2 rounded-l">{"<"}</button>
          <span className="px-4">07/19/24-07/25/24</span>
          <button className="bg-gray-600 p-2 rounded-r">{">"}</button>
        </div>
        <p className="mt-4 text-gray-400">
          Log in as a Member to see upcoming events, screenings, and meetings.
        </p>
      </div>
    </div>
  );
};

export default CalendarSS;

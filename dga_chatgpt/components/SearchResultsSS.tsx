import Link from "next/link";
import React from "react";

const SearchResultsSS = () => {
  const results = [
    {
      title: "Western AD/SM/PA Council",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing ADSMPAWest@dga.org to be placed on the live attendance list. You...",
      email: "ADSMPAWest@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Western AD/SM/PA Council",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing ADSMPAWest@dga.org to be placed on the live attendance list. You...",
      email: "ADSMPAWest@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Western AD/SM/PA Council",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing ADSMPAWest@dga.org to be placed on the live attendance list. You...",
      email: "ADSMPAWest@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Western AD/SM/PA Council",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing ADSMPAWest@dga.org to be placed on the live attendance list. You...",
      email: "ADSMPAWest@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Eastern AD/UPM Council",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing ADUPMEast@dga.org to be placed on the live attendance list. You...",
      email: "ADUPMEast@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Eastern AD/SM/PA Council",
      category: "MEETINGS",
      description:
        "...join the virtual session. Please email ADSMPAEast@dga.org for last-minute registrations or assistance j...",
      email: "ADSMPAEast@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Latino Committee",
      category: "MEETINGS",
      description:
        "...the in-person meeting, please RSVP by emailing LC@dga.org to be placed on the live attendance list. You...",
      email: "LC@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "San Francisco Coordinating Committee",
      category: "MEETINGS",
      description:
        "...the yellow registration button. Please email SFCC@dga.org for questions regarding this meeting. DGA A...",
      email: "SFCC@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Disability Committee",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing disability@dga.org to be placed on the live attendance list. You...",
      email: "disability@dga.org",
      image: "/placeholder-meeting.png",
    },
    {
      title: "Western AD/SM/PA Council",
      category: "MEETINGS",
      description:
        "...erson meeting, please RSVP by emailing ADSMPAWest@dga.org to be placed on the live attendance list. You...",
      email: "ADSMPAWest@dga.org",
      image: "/placeholder-meeting.png",
    },
  ];

  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            placeholder="DGA"
            className="bg-gray-800 text-white p-2 flex-grow"
          />
          <button className="bg-gray-600 p-2">X</button>
          <button className="bg-gray-600 p-2">
            <img src="/placeholder-search-icon.png" alt="Search" />
          </button>
        </div>
        <p className="text-yellow-400 mb-4">
          If you are trying to contact a DGA member,{" "}
          <Link
            href="/online-member-directory"
            className="text-yellow-400 underline"
          >
            Click here to use the online Member Directory.
          </Link>
        </p>
        <p className="mb-4">Results 1-10 of 22274</p>
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 flex items-center space-x-4"
            >
              <img
                // src={result.image}
                src="/placeholder-meeting.png"
                alt={result.title}
                className="h-16 w-16"
              />
              <div>
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-sm text-gray-400">{result.category}</p>
                <p className="text-sm">{result.description}</p>
                <p className="text-sm text-blue-400">{result.email}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center space-x-2">
          <button className="bg-gray-600 p-2">1</button>
          <button className="bg-gray-600 p-2">2</button>
          <button className="bg-gray-600 p-2">3</button>
          <button className="bg-gray-600 p-2">4</button>
          <button className="bg-gray-600 p-2">5</button>
          <button className="bg-gray-600 p-2">6</button>
          <button className="bg-gray-600 p-2">7</button>
          <button className="bg-gray-600 p-2">8</button>
          <button className="bg-gray-600 p-2">9</button>
          <button className="bg-gray-600 p-2">10</button>
          <button className="bg-gray-600 p-2">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsSS;

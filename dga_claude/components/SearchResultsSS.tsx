import Image from "next/image";
import Link from "next/link";

const SearchResultsSS = () => {
  const results = [
    {
      id: 1,
      title: "Western AD/SM/PA Council",
      type: "MEETINGS",
      color: "bg-orange-500",
      email: "ADSMPAWest@dga.org",
    },
    {
      id: 2,
      title: "Western AD/SM/PA Council",
      type: "MEETINGS",
      color: "bg-orange-500",
      email: "ADSMPAWest@dga.org",
    },
    {
      id: 3,
      title: "Western AD/SM/PA Council",
      type: "MEETINGS",
      color: "bg-orange-500",
      email: "ADSMPAWest@dga.org",
    },
    {
      id: 4,
      title: "Western AD/SM/PA Council",
      type: "MEETINGS",
      color: "bg-orange-500",
      email: "ADSMPAWest@dga.org",
    },
    {
      id: 5,
      title: "Eastern AD/UPM Council",
      type: "MEETINGS",
      color: "bg-blue-500",
      email: "ADUPMEast@dga.org",
    },
    {
      id: 6,
      title: "Eastern AD/SM/PA Council",
      type: "MEETINGS",
      color: "bg-teal-500",
      email: "ADSMPAEast@dga.org",
    },
    {
      id: 7,
      title: "Latino Committee",
      type: "MEETINGS",
      color: "bg-green-500",
      email: "LC@dga.org",
    },
    {
      id: 8,
      title: "San Francisco Coordinating Committee",
      type: "MEETINGS",
      color: "bg-yellow-700",
      email: "SFCC@dga.org",
    },
    {
      id: 9,
      title: "Disability Committee",
      type: "MEETINGS",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      email: "disability@dga.org",
    },
    {
      id: 10,
      title: "Western AD/SM/PA Council",
      type: "MEETINGS",
      color: "bg-orange-500",
      email: "ADSMPAWest@dga.org",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-4">
        <input
          type="text"
          value="DGA"
          className="bg-gray-800 text-white px-3 py-2 rounded-md w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <p className="text-yellow-500 text-sm">
          If you are trying to contact a DGA member,{" "}
          <Link href="#" className="underline">
            Click here to use the online Member Directory.
          </Link>
        </p>
      </div>
      <p className="text-gray-400 text-sm mb-4">Results 1-10 of 22274</p>
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className="flex items-start space-x-4">
            <div
              className={`w-16 h-16 ${result.color} flex items-center justify-center text-white text-xs font-bold p-2 rounded`}
            >
              {result.title
                .split(" ")
                .map((word) => word.charAt(0))
                .join("")}
            </div>
            <div>
              <p className="text-gray-400 text-xs">{result.type}</p>
              <h3 className="text-white font-bold">{result.title}</h3>
              <p className="text-gray-400 text-sm truncate">
                ...erson meeting, please RSVP by emailing {result.email} to be
                placed on the live attendance list. You...
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
          <Link
            key={page}
            href="#"
            className={`w-8 h-8 flex items-center justify-center rounded ${
              page === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {page}
          </Link>
        ))}
        <Link
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded bg-gray-700 text-gray-300"
        >
          &gt;
        </Link>
      </div>
    </div>
  );
};

export default SearchResultsSS;

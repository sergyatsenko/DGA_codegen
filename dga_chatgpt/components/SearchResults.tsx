import React, { useState, ChangeEvent, FormEvent } from "react";

interface ApiResponse {
  message: string;
  data?: any;
  error?: string;
}

export default function SearchResults() {
  const [result, setResult] = useState<string>("");
  const [inputData, setInputData] = useState<string>("");

  const makeRequest = async (method: string, body: string | null = null) => {
    try {
      console.log("making request...", method, body);
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method === "POST" && body) {
        options.body = JSON.stringify({ data: body });
      }

      var requestUrl =
        method === "GET" ? `/api/search?q=${body}` : "/api/search";

      const response = await fetch(requestUrl, options);
      console.log("search response: ", response);
      const data: ApiResponse = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Error: ${error.message}`);
      } else {
        setResult("An unknown error occurred");
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("input change", e.target.value);
    setInputData(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, method: string) => {
    console.log("submitting form...");
    e.preventDefault();
    console.log("handleSubmit: ", method, inputData);
    makeRequest(method, inputData);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Interaction Example</h1>

      <div className="mb-4">
        <label htmlFor="inputData" className="block mb-2 font-medium">
          Input Data:
        </label>
        <input
          id="inputData"
          type="text"
          value={inputData}
          onChange={handleInputChange}
          placeholder="Enter data to send..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          onClick={() => makeRequest("GET", inputData)}
          className={buttonClasses}
        >
          GET Request
        </button>
        <form onSubmit={(e) => handleSubmit(e, "POST")} className="contents">
          <button type="submit" className={buttonClasses}>
            POST Request
          </button>
        </form>
      </div>

      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">API Response:</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto whitespace-pre-wrap">
          {result || "No result yet"}
        </pre>
      </div>
    </div>
  );
}

const buttonClasses =
  "py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors";

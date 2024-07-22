import React, { useState, ChangeEvent, FormEvent } from "react";

interface ApiResponse {
  message: string;
  data?: any;
  error?: string;
}

export default function SearchResults() {
  const [result, setResult] = useState<string>("");
  const [inputData, setInputData] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<string>("1");
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [facets, setFacets] = useState<string>("");

  const makeRequest = async (method: string, body: string | null = null) => {
    try {
      console.log("making request...", method, body);
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      let requestUrl = "/api/search";

      const facetsArray = facets
        .split(",")
        .map((facet) => facet.trim())
        .filter(Boolean);

      if (method === "GET") {
        const queryParams = new URLSearchParams({
          ...(body ? { q: body } : {}),
          page: pageNumber,
          ...(sortField ? { sortField, sortOrder } : {}),
          ...(facetsArray.length > 0 ? { facets: facetsArray.join(",") } : {}),
        });
        requestUrl += `?${queryParams}`;
      } else if (method === "POST") {
        options.body = JSON.stringify({
          q: body,
          page: pageNumber,
          ...(sortField
            ? { sort: { field: sortField, order: sortOrder } }
            : {}),
          ...(facetsArray.length > 0 ? { facets: facetsArray } : {}),
        });
      }

      console.log("options.body", options.body);

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

  const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("page change", e.target.value);
    setPageNumber(e.target.value);
  };

  const handleSortFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("sort field change", e.target.value);
    setSortField(e.target.value);
  };

  const handleSortOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("sort order change", e.target.value);
    setSortOrder(e.target.value as "asc" | "desc");
  };

  const handleFacetsChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("facets change", e.target.value);
    setFacets(e.target.value);
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
      <div className="mb-4">
        <label htmlFor="pageNumber" className="block mb-2 font-medium">
          Page Number:
        </label>
        <input
          id="pageNumber"
          type="number"
          value={pageNumber}
          onChange={handlePageChange}
          placeholder="Enter page number..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sortField" className="block mb-2 font-medium">
          Sort Field:
        </label>
        <input
          id="sortField"
          type="text"
          value={sortField}
          onChange={handleSortFieldChange}
          placeholder="Enter sort field..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sortOrder" className="block mb-2 font-medium">
          Sort Order:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="facets" className="block mb-2 font-medium">
          Facets:
        </label>
        <input
          id="facets"
          type="text"
          value={facets}
          onChange={handleFacetsChange}
          placeholder="Enter comma-separated facets..."
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

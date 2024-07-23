import React, { useState, ChangeEvent, FormEvent } from "react";

interface ApiResponse {
  message: string;
  data?: any;
  error?: string;
}

interface SearchParams {
  q: string;
  page: number;
  sort?: { field: string; order: "asc" | "desc" };
  filters?: string[];
}

export default function SearchResults() {
  const [result, setResult] = useState<string>("");
  const [searchParams, setSearchParams] = useState<SearchParams>({
    q: "",
    page: 1,
    sort: { field: "", order: "asc" },
    filters: [],
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParams((prev) => {
      if (name === "sortField" || name === "sortOrder") {
        return {
          ...prev,
          sort: {
            ...prev.sort,
            [name === "sortField" ? "field" : "order"]: value,
          },
        };
      }
      if (name === "filters") {
        return {
          ...prev,
          filters: value
            .split(",")
            .map((filter) => filter.trim())
            .filter(Boolean),
        };
      }
      return { ...prev, [name]: name === "page" ? parseInt(value, 10) : value };
    });
  };

  const makeRequest = async () => {
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchParams),
      });

      const data: ApiResponse = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(
        `Error: ${
          error instanceof Error ? error.message : "An unknown error occurred"
        }`
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    makeRequest();
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search API Interaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Search Query"
          name="q"
          value={searchParams.q}
          onChange={handleInputChange}
          placeholder="Enter search query..."
        />
        <InputField
          label="Page Number"
          name="page"
          type="number"
          value={searchParams.page.toString()}
          onChange={handleInputChange}
          min="1"
        />
        <InputField
          label="Sort Field"
          name="sortField"
          value={searchParams.sort?.field || ""}
          onChange={handleInputChange}
          placeholder="Enter sort field..."
        />
        <SelectField
          label="Sort Order"
          name="sortOrder"
          value={searchParams.sort?.order || ""}
          onChange={handleInputChange}
          options={[
            { value: "asc", label: "Ascending" },
            { value: "desc", label: "Descending" },
          ]}
        />
        <InputField
          label="Filters"
          name="filters"
          value={searchParams.filters?.join(", ") || ""}
          onChange={handleInputChange}
          placeholder="Enter comma-separated filters..."
        />
        <button type="submit" className={buttonClasses}>
          Search
        </button>
      </form>
      <div className="mt-6 border border-gray-300 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">API Response:</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto whitespace-pre-wrap">
          {result || "No result yet"}
        </pre>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  min?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  min,
}) => (
  <div>
    <label htmlFor={name} className="block mb-2 font-medium">
      {label}:
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      min={min}
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div>
    <label htmlFor={name} className="block mb-2 font-medium">
      {label}:
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const buttonClasses =
  "w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors";

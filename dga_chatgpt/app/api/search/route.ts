import { NextRequest, NextResponse } from "next/server";
import { SearchClient, AzureKeyCredential } from "@azure/search-documents";

// Interfaces
interface SearchResult {
  id: string;
  url: string;
  title: string;
  contentSummary: string;
  metaDescription: string;
  metaTitle: string;
  metaAuthor: string;
  languageCode: string;
}

interface FacetValue {
  value: string;
  count: number;
}

interface Facets {
  metaAuthor: FacetValue[];
  languageCode: FacetValue[];
}

interface PaginatedResponse {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  resultsPerPage: number;
  results: SearchResult[];
  facets: Facets;
  filters: string[];
}

interface SearchParams {
  q: string;
  page: number;
  sort?: { field: string; order: "asc" | "desc" };
  filters?: string[];
}

// Constants
const RESULTS_PER_PAGE = 10;
const FACET_FIELDS = ["metaAuthor", "languageCode"] as const;

// Environment variables
const searchEndpoint = process.env.SEARCH_ENDPOINT;
const searchIndex = process.env.SEARCH_INDEX || "defaultIndex";
const searchKey = process.env.SEARCH_KEY;

// Validation
if (!searchEndpoint || !searchKey) {
  throw new Error("Missing required environment variables");
}

// Initialize search client
const client = new SearchClient(
  searchEndpoint,
  searchIndex,
  new AzureKeyCredential(searchKey)
);

export async function POST(request: NextRequest) {
  try {
    const body: SearchParams = await request.json();
    const { q = "", page = 1, sort, filters } = body;

    const searchOptions = {
      includeTotalCount: true,
      facets: FACET_FIELDS,
      skip: (page - 1) * RESULTS_PER_PAGE,
      top: RESULTS_PER_PAGE,
      orderBy:
        sort && sort?.field && sort?.order
          ? [`${sort.field} ${sort.order}`]
          : [],
      filter: filters ? filters.join(" and ") : "",
    };

    console.log("Search options:", JSON.stringify(searchOptions, null, 2));

    const search = await client.search(q, searchOptions);

    const results: SearchResult[] = [];
    const facets: Facets = {
      metaAuthor: [],
      languageCode: [],
    };

    for await (const result of search.results) {
      results.push(result.document as SearchResult);
    }

    if (search.facets) {
      FACET_FIELDS.forEach((field) => {
        facets[field] =
          search.facets[field]?.map((facet) => ({
            value: facet.value,
            count: facet.count,
          })) || [];
      });
    }

    const totalResults = search.count || 0;
    const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

    const response: PaginatedResponse = {
      totalResults,
      totalPages,
      currentPage: page,
      resultsPerPage: RESULTS_PER_PAGE,
      facets,
      results,
      filters: filters || [],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

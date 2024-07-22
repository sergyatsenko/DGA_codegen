import { NextRequest, NextResponse } from "next/server";
import { SearchClient, AzureKeyCredential } from "@azure/search-documents";

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

interface Facets {
  metaAuthor: { value: string; count: number }[];
  languageCode: { value: string; count: number }[];
}

interface PaginatedResponse {
  totalResults: number;
  totalPages: number;
  currentPage: number;
  resultsPerPage: number;
  results: SearchResult[];
  facets: Facets;
}

interface SearchParams {
  q: string;
  page: number;
  sort?: { [key: string]: "asc" | "desc" };
  facets?: { [key: string]: string[] };
}

const searchEndpoint = process.env.SEARCH_ENDPOINT || "";
const searchIndex = process.env.SEARCH_INDEX || "defaultIndex";
const client = new SearchClient(
  searchEndpoint,
  searchIndex,
  new AzureKeyCredential(process.env.SEARCH_KEY ?? "")
);

const RESULTS_PER_PAGE = 10;

export async function GET(request: NextRequest) {
  // ... (GET method remains unchanged)
}

export async function POST(request: NextRequest) {
  try {
    console.log("POST request received");
    const body: SearchParams = await request.json();
    const query = body.q || "";
    const page = body.page || 1;
    const sort = body.sort || {};
    const facetFilters = body.facets || {};

    const searchOptions = {
      includeTotalCount: true,
      facets: ["metaAuthor", "languageCode"],
      skip: (page - 1) * RESULTS_PER_PAGE,
      top: RESULTS_PER_PAGE,
      orderBy: Object.entries(sort).map(
        ([field, order]) => `${field} ${order}`
      ),
      filter: Object.entries(facetFilters)
        .map(([field, values]) =>
          values.map((value) => `${field} eq '${value}'`).join(" or ")
        )
        .filter((filter) => filter !== "")
        .join(" and "),
    };

    const search = await client.search(query, searchOptions);

    const results: SearchResult[] = [];
    const facets: Facets = {
      metaAuthor: [],
      languageCode: [],
    };

    for await (const result of search.results) {
      results.push({
        id: result.document.id,
        url: result.document.url,
        title: result.document.title,
        contentSummary: result.document.contentSummary,
        metaDescription: result.document.metaDescription,
        metaTitle: result.document.metaTitle,
        metaAuthor: result.document.metaAuthor,
        languageCode: result.document.languageCode,
      });
    }

    if (search.facets) {
      facets.metaAuthor =
        search.facets.metaAuthor?.map((facet) => ({
          value: facet.value,
          count: facet.count,
        })) || [];

      facets.languageCode =
        search.facets.languageCode?.map((facet) => ({
          value: facet.value,
          count: facet.count,
        })) || [];
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
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

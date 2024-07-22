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

const searchEndpoint = process.env.SEARCH_ENDPOINT || "";
const searchIndex = process.env.SEARCH_INDEX || "defaultIndex";
const client = new SearchClient(
  searchEndpoint,
  searchIndex,
  new AzureKeyCredential(process.env.SEARCH_KEY ?? "")
);

export async function GET(request: NextRequest) {
  try {
    console.log("GET request received");
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    const searchOptions = {
      includeTotalCount: true,
      facets: ["metaAuthor", "languageCode"],
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

    //console.log("Search facets", search.facets);
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

    return NextResponse.json(
      {
        count: search.count,
        facets: facets,
        results: results,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Your POST logic here
    return NextResponse.json(
      { message: "POST request successful", data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

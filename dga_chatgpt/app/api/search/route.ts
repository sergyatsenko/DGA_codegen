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
}

const searchEndpoint = process.env.SEARCH_ENDPOINT || "";
const searchIndex = process.env.SEARCH_INDEX || "defaultIndex"; // Provide a default value for SEARCH_INDEX
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

    const search = await client.search(query);

    const results: SearchResult[] = [];

    for await (const result of search.results) {
      console.log(result.document);
      //console.log("fields", result.document.url, result.document.title);
      //console.log(result.document.url);
      results.push({
        id: result.document.id,
        url: result.document.url,
        title: result.document.title,
        contentSummary: result.document.contentSummary,
        metaDescription: result.document.metaDescription,
        metaTitle: result.document.metaTitle,
        metaAuthor: result.document.metaAuthor,
      });
    }

    return NextResponse.json(
      {
        count: search.count,
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

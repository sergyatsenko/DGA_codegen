"use client";
import Image from "next/image";
import Footer from "../../components/Footer";
import HeaderLinks from "../../components/HeaderLinks";
import SubHeader from "../../components/SubHeader";
import SearchResultsSS from "@/components/SearchResultsSS";
import SearchFiltersSS from "@/components/SearchFiltersSS";
import FooterSS from "@/components/FooterSS";
import TopHeaderSS from "@/components/TopHeaderSS";
import BlogDetailsSS from "@/components/BlogDetailsSS";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <header>
        <TopHeaderSS />
      </header>

      <div className="flex">
        <div className="w-1/3">
          <p>TODO: filters</p>
        </div>
        <div className="w-2/3">
          <SearchResults />
        </div>
      </div>

      <FooterSS />
    </div>
  );
}

import Image from "next/image";
import Footer from "../../components/Footer";
import HeaderLinks from "../../components/HeaderLinks";
import SubHeader from "../../components/SubHeader";
import SearchResultsSS from "@/components/SearchResultsSS";
import SearchFiltersSS from "@/components/SearchFiltersSS";
import FooterSS from "@/components/FooterSS";
import TopHeaderSS from "@/components/TopHeaderSS";
import BlogDetailsSS from "@/components/BlogDetailsSS";
import CalendarSS from "@/components/CalendarSS";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <header>
        <TopHeaderSS />
      </header>

      <div className="flex">
        <div className="w-2/3">
          <BlogDetailsSS />
        </div>
        <div className="w-1/3">
          <CalendarSS />
        </div>
      </div>

      <FooterSS />
    </div>
  );
}

import Image from "next/image";
import Footer from "../components/Footer";
import HeaderLinks from "../components/HeaderLinks";
import SubHeader from "../components/SubHeader";
import SearchResultsSS from "@/components/SearchResultsSS";
import SearchFiltersSS from "@/components/SearchFiltersSS";
import FooterSS from "@/components/FooterSS";
import TopHeaderSS from "@/components/TopHeaderSS";

export default function Home() {
  return (
    // <div>
    //   <HeaderLinks />
    //   <SubHeader />
    //   <SearchResultsSS />
    //   <Footer />
    // </div>
    <div className="bg-gray-700">
      <header>
        {/* <HeaderLinks />
        <SubHeader /> */}
        <TopHeaderSS />
      </header>

      <div className="flex">
        {/* <SearchOptions /> */}
        <div className="w-1/4">
          <SearchFiltersSS />
        </div>
        <div className="w-3/4">
          <SearchResultsSS />
        </div>
      </div>
      {/* <Footer /> */}
      <FooterSS />
    </div>
  );
}

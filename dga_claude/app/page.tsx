import Image from "next/image";
import Footer from "../components/Footer";
import HeaderLinks from "../components/HeaderLinks";
import SubHeader from "../components/SubHeader";
import SearchResults from "@/components/SearchResults";
import SearchOptions from "@/components/SearchOptions";

export default function Home() {
  return (
    <>
      <header>
        <HeaderLinks />
        <SubHeader />
      </header>

      <div className="flex">
        <SearchOptions />
        <div className="w-3/4">
          <SearchResults />
        </div>
      </div>
      <Footer />
    </>
  );
}

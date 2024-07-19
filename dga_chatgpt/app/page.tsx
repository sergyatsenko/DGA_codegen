import Image from "next/image";
import Footer from "../components/Footer";
import HeaderLinks from "../components/HeaderLinks";
import SubHeader from "../components/SubHeader";
import SearchResultsSS from "@/components/SeatchResultsSS";
export default function Home() {
  return (
    <div>
      <HeaderLinks />
      <SubHeader />
      <SearchResultsSS />
      <Footer />
    </div>
  );
}

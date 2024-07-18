import Image from "next/image";
import Footer from "../components/Footer";
import HeaderLinks from "../components/HeaderLinks";
import SubHeader from "../components/SubHeader";

export default function Home() {
  return (
    <div>
      <HeaderLinks />
      <SubHeader />
      <Footer />
    </div>
  );
}

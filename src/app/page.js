import Image from "next/image";
import Landing from "./components/landing";
import Features from "./components/Features";
import Stats from "./components/Stats";
import How from "./components/How";
import Why from "./components/Focus";
import Navbar from "./components/Navbar";
import Faqs from "./components/Faqs";
import Banner from "./components/Banner";
import FooterNew from "./components/FooterNew";

export default function Home() {
  return (
    <>
      <Navbar /> 
      <Landing />
      <Features />
      <How/>
      <Why/>
      <Faqs/>
      <Banner />
      <FooterNew/>
    </>
  );
}

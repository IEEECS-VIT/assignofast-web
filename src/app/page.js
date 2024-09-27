import Image from "next/image";
import Landing from "./components/landing";
import What from "./components/What";
import Features from "./components/Features";
import Why from "./components/Why";

export default function Home() {
  return (
    <>
      <Landing />
      <What />
      {/* <Features /> */}
      <Why/>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function How() {
  return (
    <section className="bg-black text-white p-4 md:p-16 pt-[10vh] lg:py-[18vh]" id="how">
      <h1 className="text-center text-3xl font-bold mb-8 md:text-5xl md:mb-16">How To Use?</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
        <div className="relative w-[80%] md:w-[40%]">
          <div className="absolute left-20 inset-0 bg-gradient-to-r from-[#08eb2a] to-transparent rounded-full blur-[8rem] opacity-80"></div>
          <Image
            src="./how.svg"
            alt="how"
            layout="responsive"
            width={700} 
            height={400} 
            className="relative z-10"
          />
        </div>
        <div className="w-full md:w-[50%] p-4 text-center md:text-left md:p-12 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Assignofast Extension</h2>
          <p className="text-base leading-relaxed md:text-lg">
          Assignofast is a smart extension that syncs your assignments and due dates from your VTOP. It organizes tasks into a centralized dashboard for easy tracking. The app 
          sends real-time notifications to keep you updated on deadlines. Never 
          miss a submission with automated reminders!
          </p>

          <button className="bg-[#465254] w-[36vw] lg:w-[14vw] h-[9vh] rounded-full border-4 border-[#6da154] flex items-center justify-center mt-[4vh]">
          <Link
            href="/guide"
            className="bg-[#070707] w-[33vw] lg:w-[12vw] h-[6vh] rounded-full font-bold border-2 border-[#6da154] flex items-center justify-center"
          >
            Stepwise Guide
          </Link>
        </button>

        </div>
        
      </div>
    </section>
  );
}

import { Abyssinica_SIL, Alexandria } from "next/font/google";
import Image from "next/image";

const abyssinica = Abyssinica_SIL({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Alexandria({
  weight: '400',
  subsets: ['latin'],
});

export default function Footer() {
    return (
        <div className={`h-[80vh] lg:h-[90vh] w-full bg-black overflow-hidden ${abyssinica.className}`}>
            <div className="h-[80vh] lg:h-[80vh] w-[90vw] flex flex-wrap ml-[5vw] bg-[#002610] mt-[5vh] lg:mt-[10vh] rounded-2xl">
                <div className="w-[200vw] lg:w-[35vw] mt-[5vh] lg:mt-[10vh] ml-[5vw] mr-[5vw]">
                    <p className={`text-[3vh] lg:text-[7vh] text-white mb-[2vh] lg:mb-[4vh] ${alexandria.className}`}>Download Assignofast</p>
                    <p className="text-white">
                    Unlock your potential with our app - track tasks, manage DAs, and stay organized with just a tap. Download now and take control, wherever life takes you!
                    </p>
                    <div className="flex flex-col my-[5vh] items-center gap-6 w-[80vw] lg:w-[30vw]">
            <button className="h-[10vh] w-full bg-[#144c11] flex items-center gap-4 p-4">
              <Image src="/chrome-web.svg" width={45} height={45} alt="Chrome Icon" className="h-full" />
              <div className="flex flex-col justify-center text-left">
                <span className="text-[1.8vh] lg:text-[2.5vh]">Available in the</span>
                <span className="text-[2.8vh] lg:text-[4vh] font-bold">Chrome Web Store</span>
              </div>
            </button>

            <div className="flex flex-row gap-4 w-full">
              <button className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
                <Image src="/apple.svg" width={45} height={45} alt="Apple Icon" className="h-full" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[2vh]">Download on</span>
                  <span className="text-[2vh] lg:text-[3vh] font-bold">App Store</span>
                </div>
              </button>

              <button className="h-[10vh] w-[50%] bg-[#144c11] flex items-center gap-4 p-4">
                <Image src="/google-play.svg" width={45} height={45} alt="Google Play Icon" className="h-full" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[1vh] lg:text-[2vh]">Get it on</span>
                  <span className="text-[2vh] lg:text-[3vh] font-bold">Google Play</span>
                </div>
              </button>
            </div>
          </div>
                </div>
                <img src="footer.svg" alt="Footer Graphic" className="hidden lg:block max-w-full h-[80vh]" />
                <img src="footer-mobile.svg" alt="Footer Graphic" className="block lg:hidden px-8 max-w-full h-[35vh]" />
            </div>

        </div>
    );
}

"use client";
import Image from "next/image";
import { Abyssinica_SIL, Alexandria } from "next/font/google";


const abyssinica = Abyssinica_SIL({
  weight: "400",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  weight: "400",
  subsets: ["latin"],
});

const featuresData = [
  {
    icon: "./icon-box.svg",
    title: "Single avenue",
    content:
      "All your deadlines at a single place, helping you stay organized and never miss important tasks.",
  },
  {
    icon: "./updated.svg",
    title: "Customised Tasks",
    content: "Safe and seamless remainder options.",
  },
  {
    icon: "./sync.svg",
    title: "Auto Sync",
    content:
      "All your assignments are automatically synced from your online portal, keeping everything organized and accessible.",
  },
  {
    icon: "./reminder.svg",
    title: "Personal reminders",
    content:
      "You can use the app to add personal tasks to refrain from forgetting your personal occupations",
  },
];

export default function Features() {
  return (
    <div className="bg-black h-[100%] p-4 font-sans pt-[10vh] lg:pt-[20vh]" id="features">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-full max-w-[300px] md:max-w-none">
            <img
              src="./phone.svg"
              alt="phone img"
              className="w-full h-[50vh] lg:h-[70vh] object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-white w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left p-2"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mb-2"
                />
                <h2 className="text-lg md:text-xl mb-1 font-bold">
                  {feature.title}
                </h2>
                <p className="text-sm md:text-base">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: "400",
  subsets: ["latin"],
});

export default function Question({ bgColor, question, answer }) {
  return (
    <div
      className={`relative  md:w-[42rem] m-4 p-6 rounded-xl shadow-lg ${abyssinica.className}`}
      style={{ minHeight: "fit-content" }}
    >
      <div
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: bgColor, opacity: 0.4 }}
      />
      <div className="relative text-white z-10 space-y-4">
        <h2
          className={`text-xl md:text-2xl font-semibold leading-relaxed`}
        >
          {question}
        </h2>
        <p className="text-base md:text-lg leading-relaxed opacity-90">
          {answer}
        </p>
      </div>
    </div>
  );
}

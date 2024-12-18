import Image from "next/image";
import { Noto_Sans_Georgian } from "next/font/google";

const abyssinica = Noto_Sans_Georgian({
  weight: '400',
  subsets: ['latin'],
});

const alexandria = Noto_Sans_Georgian({
  weight: '400',
  subsets: ['latin'],
});

export default function What() {
  return (
    <section className="bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-0">Focus on What Matters</h1>

      <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2"> {/* Image div */}
          <Image
            src="./focus.svg"
            alt="focus"
            height={500}
            width={500}
            className="w-full max-h-[30rem]"
          />
        </div>

        <div className="p-8 w-full md:w-1/2 order-2 md:order-1"> {/* Content div - stays in order */}
          <div className="border-l-4 border-[#89ef00] p-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">Personal Tasks</h2>
            <p className="text-sm md:text-base">
            Easily manage your personal academic tasks such as Moodle quizzes, extra assignment submissions, and more. You can manually add any task here to keep track of your academic responsibilities in one place.
            </p>
          </div>

          <div className="border-l-4 border-[#89ef00] p-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">Assignments Sync</h2>
            <p className="text-sm md:text-base">
            Your assignments will automatically sync, ensuring you always have the latest information. While synced tasks cannot be deleted, you can add personalized notes, such as specifying whether an assignment needs to be submitted online or offline.
            </p>
          </div>

          <div className="border-l-4 border-[#89ef00] p-4 mb-8">
            <h2 className="text-lg md:text-xl font-semibold">Notifications</h2>
            <p className="text-sm md:text-base">
            Our app stands out by offering proactive notifications, ensuring you never miss an important deadline. We keep you informed with timely reminders, so you stay on top of your academic schedule effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

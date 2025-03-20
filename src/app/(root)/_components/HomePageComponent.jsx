import React from "react";
import Link from "next/link";
import { Tags } from "lucide-react";

const HomePageComponent = () => {
  return (
    <>
      <div className="flex justify-center text-center mt-10">
        <div className="grid grid-cols-2 gap-30">
          {/* First Card with Background Image */}
          <Link href="/book-categories">
            <div
              className="w-[20rem] h-[30rem] bg-cover bg-center rounded-4xl relative group overflow-hidden"
              style={{ backgroundImage: "url('/images/whisper.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t mb-[8.5px] from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <span className="text-white text-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View All Available Books
                </span>
              </div>
              <button className="px-2 py-1 font-semibold rounded-4xl absolute left-4 text-[#087E8B] top-4 bg-white flex gap-2"><Tags/> Book</button>
            </div>
          </Link>

          {/* Second Card */}
          <Link href="/old-school-cartoons">
            <div
              className="w-[20rem] h-[30rem] bg-cover bg-center rounded-4xl relative group overflow-hidden"
              style={{ backgroundImage: "url('/images/silentstep.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t mb-[8.5px] from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <span className="text-white text-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View All Available Cartoons
                </span>
              </div>
              <button className="px-3 font-semibold py-1 rounded-4xl absolute left-4 top-4 text-[#087E8B] bg-white flex gap-2"><Tags/> Cartoon</button>

            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageComponent;

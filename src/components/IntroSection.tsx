import React from "react";
import Image from "next/image";
import Link from "next/link";

function IntroSection() {
  return (
    <div className="flex flex-col gap-4 bg-[#192b51] py-3 px-2">
      <div className="relative">
        <div className="absolute top-0 left-0 font-bold text-4xl text-blue-950 text-shadow-lg animate-bounce">
          Gemiverse
        </div>
        <Image
          src="/gameboy.avif"
          alt="Gameboy"
          width={500}
          height={500}
          className="max-w-full rounded-3xl"
        />
        <div className="absolute bottom-2 right-2 text-md italic text-blue-950 font-semibold font-mono text-xs">
          Pixel by pixel, we build new worlds.
        </div>
      </div>
      <div className="relative bg-black h-[400px] rounded-3xl">
        <Image
          src="/tetris.jpg"
          alt="Gameboy"
          width={500}
          height={500}
          className="max-w-full rounded-3xl"
        />
        <div className="absolute bottom-0 italic text-white font-semibold font-mono p-2">
          <p>Your Next Great Adventure Awaits</p>
          <p className="text-xs">
            Step into new worlds and embark on unforgettable journeys. Our store
            is home to a curated collection of games. Dive in and discover your
            next favorite game today.
          </p>
          <Link
            href="/"
            className="text-xs italic underline float-right mt-2 mx-2"
          >
            View our games
          </Link>
        </div>
      </div>
      <div className="relative bg-blue-900 h-[400px] rounded-3xl overflow-hidden">
        <Image
          src="/boy-gaming.avif"
          alt="Gameboy"
          width={500}
          height={500}
          className="max-w-full rounded-t-3xl"
        />
        <div className="absolute bottom-0 italic text-blue-800 font-semibold font-mono backdrop-blur-md rounded-b-2xl p-2">
          <p>Join Our Quest</p>
          <p className="text-xs">
            Ready to turn your passion for gaming into a career? If you want to
            make games that matter, check out our open positions and see where
            you fit in.
          </p>
          <Link
            href="/"
            className="text-xs italic underline float-right mt-2 mx-2"
          >
            Our career path
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;

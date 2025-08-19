import React from "react";
import Image from "next/image";
import Link from "next/link";

function IntroSection() {
  return (
    <div className="flex flex-col gap-4 bg-[#061442] py-3 px-2 md:px-80 items-center">
      <div className="my-10 text-[#2ed9ff] text-shadow-lg font-bold sm:text-center text-4xl">
        <span>Into the </span>
        <span className={`inline-block animate-bounce animate-color-loop`}>Gemiverse</span>
      </div>
      <div className="relative flex rounded-3xl justify-center overflow-hidden sm:bg-[#00ecfa] max-w-[752px] md:w-[752px]">
        <Image
          src="/gameboy.avif"
          alt="Gameboy"
          width={500}
          height={500}
          className="max-w-full sm:rounded-full rounded-3xl"
        />

        <div
          className={`absolute bottom-0 hidden sm:block italic text-blue-800 font-semibold font-mono 
          backdrop-blur-md rounded-b-2xl p-2`}
        >
          <p>Pixel by pixel, we build new worlds.</p>
        </div>
        <div
          className={`absolute bottom-2 right-2 sm:hidden text-md italic text-blue-950 font-semibold 
          font-mono text-xs`}
        >
          <p>Pixel by pixel, we build new worlds.</p>
        </div>
      </div>
      <div className="relative bg-black h-[400px] rounded-3xl max-w-[752px] md:w-[752px] overflow-hidden">
        <Image
          src="/tetris.jpg"
          alt="Gameboy"
          width={500}
          height={500}
          className="max-w-full rounded-3xl"
        />
        <div className="absolute bottom-0 italic text-white font-semibold font-mono backdrop-blur-md p-2">
          <p>Your Next Great Adventure Awaits</p>
          <p className="text-xs">
            Step into new worlds and embark on unforgettable journeys. Our store
            is home to a curated collection of games. Dive in and discover your
            next favorite game today.
          </p>
          <Link
            href="/"
            className="text-xs italic underline float-right mt-2 mx-2 hover:translate-x-1 transition-all duration-500"
          >
            View our games
          </Link>
        </div>
      </div>
      <div
        className={`relative h-[400px] rounded-3xl overflow-hidden flex justify-center bg-[#65eaff] max-w-[752px] md:w-[752px]`}
      >
        <Image
          src="/boy-gaming.avif"
          alt="Gameboy"
          width={500}
          height={500}
          className="max-w-full rounded-t-3xl sm:rounded-none"
        />
        <div
          className={`absolute bottom-0 italic text-sky-950 font-semibold font-mono backdrop-blur-md
            rounded-b-2xl p-2`}
        >
          <p>Join Our Quest</p>
          <p className="text-xs">
            Ready to turn your passion for gaming into a career? If you want to
            make games that matter, check out our open positions and see where
            you fit in.
          </p>
          <Link
            href="/"
            className="text-xs italic underline float-right mt-2 mx-2 hover:translate-x-1 transition-all duration-500"
          >
            Our career path
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;

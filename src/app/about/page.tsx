import Footer from "@/components/Footer";
import LargeHeading from "@/components/LargeHeading";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="about bg-black h-screen">
      <div className="flex flex-col bg-blue-950 text-white py-4 px-2 md:py-4 md:px-10">
        <LargeHeading text="About us" />
        <div className="flex flex-wrap justify-center gap-4">
          <div className="lg:w-2/5 lg:p-4 font-mono">
            As a small, independent game studio, our passion is creating unique
            and unforgettable experiences that transport players to new worlds.
            Our team is a collective of storytellers, artists, and innovators
            who pour their hearts into every project. We believe that games can
            be a powerful medium for connection, creativity, and wonder, and
            we&apos;re committed to crafting titles that not only entertain but
            also resonate with players on a deeper level.
          </div>
          <Image
            src="/tetris.jpg"
            alt="tetris"
            width={500}
            height={500}
            className="max-w-full rounded-3xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

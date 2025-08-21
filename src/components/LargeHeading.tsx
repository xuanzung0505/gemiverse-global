import React from "react";

function LargeHeading({ text }: { text: string }) {
  return (
    <div className="my-10 text-[#2ed9ff] text-shadow-lg font-bold sm:text-center text-4xl">
      <span>{text}</span>
    </div>
  );
}

export default LargeHeading;

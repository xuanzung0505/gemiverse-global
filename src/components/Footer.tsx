import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-black">
      <div className="text-white font-mono text-xs p-4 flex flex-col gap-5 md:w-[768px] m-auto">
        <div className="flex flex-col gap-2">
          <div>Find us on app stores!</div>
          <div className="flex gap-2">
            <Image
              width={200}
              height={200}
              alt="app store"
              src="/download-appstore-dark.svg"
              className="w-32"
            ></Image>
            <Image
              width={200}
              height={200}
              alt="app store"
              src="/download-playstore-dark.svg"
              className="w-32"
            ></Image>
          </div>
        </div>
        <Divider className="bg-gray-400 w-full" />
        <div className="flex flex-col gap-2">
          <div>Contact us!</div>
          <div className="flex flex-col gap-2">
            <div>+85290416460</div>
            <div>vuminhngoc@gemiverseglobal.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

"use client";
import * as React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import GamesIcon from "@mui/icons-material/Games";
import { usePathname } from "next/navigation";

function TopMenu() {
  const paths = [
    { title: "Career", url: "/career" },
    { title: "About", url: "/about" },
  ];
  const pathName = usePathname();

  return (
    <div
      className={`flex bg-sky-600 items-center drop-shadow-2xl sticky top-0 sm:px-10 gap-2 
        md:gap-20 justify-center z-10`}
    >
      <div className="flex grow-1 justify-center">
        <Link href="/">
          <IconButton className="group">
            <GamesIcon fontSize="large" className="group-hover:text-white" />
          </IconButton>
        </Link>
      </div>
      <div className="grow-4 flex justify-center sm:justify-center gap-10 sm:gap-24">
        {paths.map((path, idx) => (
          <Link
            href={path.url}
            className={`font-bold hover:text-white ${
              path.url === pathName ? "text-white" : "hover:text-white"
            }`}
            key={idx}
          >
            {path.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default TopMenu;

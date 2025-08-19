"use client";
import * as React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import GamesIcon from "@mui/icons-material/Games";

function TopMenu() {
  return (
    <div
      className={`flex bg-sky-600 items-center drop-shadow-2xl sticky top-0 z-1 sm:px-10 gap-2 
        md:gap-20 justify-center`}
    >
      <div className="flex grow-1 justify-center">
        <Link href="/">
          <IconButton className="group">
            <GamesIcon fontSize="large" className="group-hover:text-white" />
          </IconButton>
        </Link>
      </div>
      <div className="grow-4 flex justify-center sm:justify-center gap-10 sm:gap-24">
        <Link href="/" className="font-bold hover:text-white">
          Career
        </Link>
        <Link href="/" className="font-bold hover:text-white">
          About us
        </Link>
      </div>
    </div>
  );
}
export default TopMenu;

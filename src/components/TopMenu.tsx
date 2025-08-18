"use client";
import * as React from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import GamesIcon from '@mui/icons-material/Games';

function TopMenu() {
  return (
    <div className="flex bg-sky-600 items-center px-1 drop-shadow-2xl sticky top-0 z-1">
      <div className="flex-1">
        <Link href="/">
          <IconButton>
            <GamesIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
      <div className="flex-1">
        <Link href="/" className="font-bold">Career</Link>
      </div>
      <div className="flex-1">
        <Link href="/" className="font-bold">About us</Link>
      </div>
    </div>
  );
}
export default TopMenu;

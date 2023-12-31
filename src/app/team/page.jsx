"use client";
import Link from "next/link";
import React, { useState } from "react";
import CoreTeam from "../components/Team/CoreTeam";
import WebTeam from "../components/Team/WebTeam";

function Page() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const clickAndScroll = () => {
    handleClick();
    scrollToTop();
  };
  return (
    <div className="flex flex-col items-center bg-[#252b42] pb-10">
      <CoreTeam />
      <WebTeam />
      <Link
        href="/former-team"
        onClick={clickAndScroll}
        className="cursor-pointer inline-flex justify-center items-center py-3 px-8  xl:text-xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]"
      >
        Show 2k23 Team
      </Link>
    </div>
  );
}

export default Page;

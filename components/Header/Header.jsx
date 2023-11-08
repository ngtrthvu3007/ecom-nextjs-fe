"use client";
import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });
const Slider = dynamic(() => import("./Slider/Slider"), { ssr: false });

export default function Header() {
  return (
    <>
      <NavigationBar />
      <Slider />
    </>
  );
}

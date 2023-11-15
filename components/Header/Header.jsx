"use client";
import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import("./Navbar/Navbar"), { ssr: false });
const Slider = dynamic(() => import("./Slider/Slider"), { ssr: false });
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <NavigationBar />
      {pathname === "/" && <Slider />}
    </>
  );
}

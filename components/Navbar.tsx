import React from "react";
import ThemeChangeButton from "./ThemeChangeButton";
import SelectProject from "./SelectProject";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 py-3 items-center bg-background sticky top-0 z-10">
      <img src="/next.svg" alt="" className="dark:invert w-[7rem]" />

      <div className="flex gap-4 items-center">
        <ThemeChangeButton />
        <SelectProject />
      </div>
    </nav>
  );
};

export default Navbar;

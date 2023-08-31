import React, { useState, useEffect } from "react";
import { Outlet } from "umi";
import Player from "@/components/player/Player";
import Menu from "./Menu";
import styles from "./index.less";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className=" w-screen h-screen flex flex-col items-center bg-white dark:bg-gray-800 ">
      <div className=" w-full h-full max-w-screen-2xl flex flex-col">
        <div className=" flex-1 flex ">
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}></Menu>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Player></Player>
      </div>
    </div>
  );
}

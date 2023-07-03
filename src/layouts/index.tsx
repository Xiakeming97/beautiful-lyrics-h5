import React, { useState, useEffect } from "react";
import { Outlet } from "umi";
import Player from "@/components/player/Player";
import styles from "./index.less";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <div className="max-w-screen-2xl h-screen flex flex-col m-auto">
        <div className="dark:bg-pink-400">
          <Outlet />
        </div>
        <Player></Player>
      </div>
    </div>
  );
}

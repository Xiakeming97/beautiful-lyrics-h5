import { Link, Outlet } from "umi";

import Player from "@/components/player/Player";

import styles from "./index.less";

export default function Layout() {
  return (
    <div className="max-w-screen-2xl h-screen flex flex-col m-auto bg-purple-300">
      <div className=" flex-1 overflow-auto">
        <Outlet />
      </div>
      <Player></Player>
    </div>
  );
}

import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import MenuItems from "./menuItems";

const activeSide =
  "instaBg h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2 mb-0 rounded-l-xl ";
const hiddenSide =
  "instaBg h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2 translate-x-60";
const activeButton =
  "absolute w-10 h-10 top-0  cursor-pointer transition-all transform duration-700 flex items-center justify-center";
const normalButton =
  "absolute w-10 h-10 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center ";

//-------------main part --------
export default function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <div className="md:hidden z-40">
      <div className="w-screen top-0 flex flex-row-reverse transform relative transition-all duration-1000 ">
        <div
          //-----use a class to style base on state : active(true) or hidden(false)
          className={active ? activeSide : hiddenSide}
        >
          <MenuItems className="h-screen top-0" />
        </div>
        {/* <div className="bg-gray-900 w-full h-screen flex flex-row-reverse  justify-center text-white">
          <Info stateSide={active} />
        </div> */}
      </div>
      <div className="flex flex-row-reverse bottom-2  ">
        <div
          className={active ? normalButton : activeButton}
          //----onClick the state is changed -------
          onClick={() => setActive(!active)}
        >
          <MenuIcon className="h-6 w-10 mt-  cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
//-------------complementary part --------
const characterTag = "text-gray-400";
const tag = "text-pink-600";
const text = "text-green-200";
const addedText = "-translate-x-60";
const addedClass = "text-green-400";

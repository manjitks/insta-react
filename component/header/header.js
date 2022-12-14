import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
  LinkIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/reducer/modal/modalAction";
import Test from "../../pages/test";
import Sidebar from "../sidebar/sidebar";

function Header() {
  const dispatch = useDispatch();
  //const modalOpen = useSelector((state) => state.modalOpen);
  return (
    <div className="shadow-sm bg-white z-30 sticky top-0 border-b-2">
      <div className="flex justify-between  max-w-6xl lg:mx-auto mx-5 items-center">
        {/* Logo */}

        <div className="relative lg:hidden  w-10 h-10 flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
              layout="fill"
            />
          </Link>
        </div>
        <div className="relative hidden lg:inline-grid w-20 h-20  cursor-pointer">
          <Link href="/">
            <img
              className="h-12 my-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
              alt="instagram"
            />
          </Link>
        </div>
        {/* Search */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-2 flex items-center pointer-events-none">
              <SearchIcon className="h-8 w-8 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 w-full block w-200 h-8 pl-10 outline-none sm:text-sm border-gray-300 
            focus:ring-black focus:border-black rounded-md "
              placeholder="Search"
            />
          </div>
        </div>
        {/* rightSide */}
        <div className="flex items-center justify-end h-6  space-x-4">
          <Link href="/profile">
            <HomeIcon className="navBtn" />
          </Link>

          <Link href="/chat/">
            <div className="navBtn relative">
              <PaperAirplaneIcon className="rotate-45" />
              <div
                className="absolute -top-1 -right-2 text-xs w-5 h-5
                bg-red-400 rounded-full flex justify-center items-center
                animate-bounce text-zinc-50"
              >
                5
              </div>
            </div>
          </Link>

          <LinkIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <PlusCircleIcon
            className="navBtn"
            onClick={() => dispatch(openModal())}
          />
          <Link href="/discover">
            <UserGroupIcon className="navBtn" />
          </Link>
          <img
            className=" h-10 rouded-full cursor-pointer navBtn"
            src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
          />
        </div>
      </div>
      <Sidebar className="" />
    </div>
  );
}

export default Header;

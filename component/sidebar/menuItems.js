import {
  HeartIcon,
  HomeIcon,
  LinkIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenuItems() {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded instaBg">
        <div className="relative  w-20 h-20  cursor-pointer mx-auto">
          <Link href="/">
            <img
              className="h-12 my-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
              alt="instagram"
            />
          </Link>
        </div>
        <ul className="space-y-2 ">
          <li>
            <Link href="/profile">
              <div className="cursor-pointer">
                <HomeIcon className="navBtnSide" />
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/chat">
              <div className="cursor-pointer">
                <PaperAirplaneIcon className="navBtnSide rotate-45" />
                <span className="flex-1 ml-3 whitespace-nowrap">Message</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link href="/profile">
              <div className="cursor-pointer">
                <PlusCircleIcon className="navBtnSide " />
                <span className="flex-1 ml-3 whitespace-nowrap">Add Post</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/discover">
              <div className="cursor-pointer">
                <UserGroupIcon className="navBtnSide rotate-45" />
                <span className="flex-1 ml-3 whitespace-nowrap">Discover</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="cursor-pointer">
                <HeartIcon className="navBtnSide " />
                <span className="flex-1 ml-3 whitespace-nowrap">Activity</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div className="cursor-pointer">
                <LinkIcon className="navBtnSide rotate-45" />
                <span className="flex-1 ml-3 whitespace-nowrap">Link</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default MenuItems;

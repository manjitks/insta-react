import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sideimage from "../component/misc/sideimage";

function SignUp() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  ">
      <Sideimage />
      <div>
        <div className="max-w-sm  border mx-auto  rounded overflow-hidden shadow-lg m-8 lg:mx-20 p-16 lg:p-20">
          <div className="">
            <div className=" mx-auto relative  w-10 h-10 mb-10 flex-shrink-0 cursor-pointer">
              <Image
                src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <input
                type="text"
                className="mt-4 w-64 rounded-l "
                placeholder="UserName"
              />
              <input
                type="text"
                className="mt-4 w-64 rounded-l "
                placeholder="Password"
              />
              <input
                type="text"
                className="mt-4 w-64 rounded-l "
                placeholder="Confirm password"
              />
              <input
                type="email"
                className="mt-4 w-64 rounded-l "
                placeholder="email"
              />
              <button
                onClick={() => router.push("/")}
                type="submit"
                className="bg-green-400 w-64 h-10 rounded-full mt-10 shadow"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm  border mx-auto rounded overflow-hidden shadow-lg m-8 lg:mx-20 lg:my-2 p-5 lg:p-8 flex justify-center">
          <h2>
            Have an account? ?
            <Link href="/login">
              <a className="text-cyan-800 mx-2">Login</a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

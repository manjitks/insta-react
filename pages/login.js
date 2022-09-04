import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sideimage from "../component/misc/sideimage";
import { login } from "../store/reducer/auth/authAction";

function Login() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.Authenticated);

  const [values, setValues] = useState({
    username: "",

    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event);
    event.persist();
    let value = event.target.value;
    let key = event.target.name;
    setValues((values) => ({
      ...values,
      [key]: event.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);

    dispatch(login(values));
  }
  if (isAuthenticated) {
    router.push("/");
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  ">
      <Sideimage />
      <div>
        <div className="max-w-sm  border mx-auto  rounded overflow-hidden shadow-lg m-8 lg:mx-20 lg:mt-10 p-16 lg:p-20">
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
                className="mt-4 w-64 rounded-full "
                placeholder="UserName"
                name="username"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="mt-4 w-64 rounded-full "
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-green-400 w-64 h-10 rounded-full mt-10 shadow"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm  border mx-auto rounded overflow-hidden shadow-lg m-8 lg:m-20 p-5 lg:p-8 flex justify-center">
          <h2>
            Don&apos;t have an account?
            <Link href="/signup">
              <a className="text-cyan-800 mx-2">SignUp</a>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;

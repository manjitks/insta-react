import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../component/header/header";
import Modal from "../modal/modal";
import Sidebar from "../sidebar/sidebar";

function Common() {
  const isAuthenticated = useSelector((state) => state.auth.Authenticated);
  const router = useRouter();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    console.log("here");
    router.push("/login");
  }
  useEffect(() => {
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      console.log("here");
      router.push("/login");
    }
  });
  return (
    <>
      {}
      <Modal />
      <Header />
    </>
  );
}

export default Common;

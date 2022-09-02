import React from "react";
import Discover from "../../component/discover/discover";
import Header from "../../component/header/header";

function index() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Header />
      <Discover />
    </div>
  );
}

export default index;

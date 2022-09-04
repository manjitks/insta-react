import React from "react";
import Common from "../../component/common/common";
import Discover from "../../component/discover/discover";

function index() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Common />
      <Discover />
    </div>
  );
}

export default index;

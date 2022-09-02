import React from "react";
import Common from "../../component/common/common";
import Chat from "../../component/chat/chat";

function chat() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Common />
      <Chat />
    </div>
  );
}

export default chat;

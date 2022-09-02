import React from "react";

import Common from "../../component/common/common";
import ProfileLayoutCss from "../../component/profiles/profileLayoutCss";

export default function ProfileLayout() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-none">
      <Common />

      <ProfileLayoutCss />
    </div>
  );
}

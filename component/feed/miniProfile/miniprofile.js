import React from "react";
import { useDispatch } from "react-redux";
import { doLogout } from "../../../store/reducer/auth/authAction";

function MiniProfile() {
  const dispatch = useDispatch();
  const handleLogot = () => {
    dispatch(doLogout());
  };
  return (
    <div className="flex items-center justify-between ml-4 mt-8 ">
      <img
        className="h-16 w-16 rounded-full border p-1    "
        src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Manjit</h2>
        <h3 className="text-sm text-gray-700">hey this is test</h3>
      </div>
      <button onClick={handleLogot} className="font-semibold">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;

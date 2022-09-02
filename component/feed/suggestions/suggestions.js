import React, { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    //   console.log(suggestion)
    setSuggestion(suggestion);
  }, []);
  return (
    <div className="mt-10 ml-5">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestion.map((s) => (
        <div key={s.id} className="flex items-center justify-between mt-3">
          <img
            src="https://cdn.cdnlogo.com/logos/i/32/instagram-icon.svg"
            className="w-10 h-10 rounded-full border p-0.5"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{s.username}</h2>
            <h3 className="text-xs ">{s.company.name}</h3>
          </div>
          <button className="text-xs font-semibold text-cyan-700">
            follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;

"use client";

import { useState } from "react";

const InteractiveTabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0]);

  const tabsKeys = Object.keys(tabs);

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <nav className="flex flex-wrap gap-8 mb-8">
        {tabsKeys?.map((item) => (
          <button
            key={item}
            className="font-semibold text-black active:text-red-500 focus:text-red-500 focus:underline focus:underline-offset-8"
            onClick={() => setCurrentTab(item)}
          >
            {tabs[item].name}
          </button>
        ))}
      </nav>

      {tabs[currentTab]?.component}
    </div>
  );
};

export default InteractiveTabs;

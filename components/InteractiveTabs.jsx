"use client";

import { useState } from "react";

const InteractiveTabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0]);

  const tabsKeys = Object.keys(tabs);

  return (
    <div className="flex flex-col justify-center items-center my-8 px-4">
      <nav className="flex justify-center flex-wrap mb-8 gap-6">
        {tabsKeys?.map((item) => (
          <button
            key={item}
            className="px-6 font-semibold text-black hover:text-red-500 active:text-red-500 focus:text-red-500 focus:underline focus:underline-offset-8"
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

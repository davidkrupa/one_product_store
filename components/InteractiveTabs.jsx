"use client";

import { useState } from "react";

const InteractiveTabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0]);

  const tabsKeys = Object.keys(tabs);

  return (
    <div className="flex flex-col">
      <nav className="flex flex-row flex-wrap gap-4 mb-4">
        {tabsKeys?.map((item) => (
          <button key={item} className="" onClick={() => setCurrentTab(item)}>
            {tabs[item].name}
          </button>
        ))}
      </nav>

      {tabs[currentTab]?.component}
    </div>
  );
};

export default InteractiveTabs;

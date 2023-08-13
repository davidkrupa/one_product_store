"use client";

import { useState } from "react";
import { TabsDescription, TabsHighlights, TabsSpecification } from ".";

const InteractiveTabs = ({ productTabs }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [tabs, setTabs] = useState([
    {
      name: "Highlights",
      component: <TabsHighlights />,
    },
    {
      name: "Specification",
      component: <TabsSpecification />,
    },
    {
      name: "Description",
      component: <TabsDescription />,
    },
  ]);

  const handleClick = (id) => {
    setCurrentTabIndex(id);
  };

  return (
    <div className="flex flex-col justify-center items-center my-8 px-4">
      <nav className="flex justify-center flex-wrap mb-8 gap-6">
        {tabs?.map((item, index) => (
          <button
            key={item.name}
            className={`px-6 font-semibold hover:text-red-500 focus:text-red-500 focus:underline focus:underline-offset-8 ${
              currentTabIndex === index
                ? "underline underline-offset-8 text-red-500"
                : "text-black"
            }`}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {tabs[currentTabIndex].component}
    </div>
  );
};

export default InteractiveTabs;

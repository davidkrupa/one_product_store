"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Multicolumn } from ".";

import headphones from "../assets/5.jpg";
import { useState } from "react";

const CustomersOpinions = () => {
  const opinions = [
    {
      text: "I absolutely love the headphones. The sound quality is exceptional, with rich bass and clear highs, and they are incredibly comfortable to wear for long periods of time. The wireless connectivity is seamless and the battery life is impressive. These headphones are a must-have for music lovers!",
      name: "Tom Smith",
      city: "New York",
    },
    {
      text: "I absolutely love the headphones. The sound quality is exceptional, with rich bass and clear highs, and they are incredibly comfortable to wear for long periods of time. The wireless connectivity is seamless and the battery life is impressive. These headphones are a must-have for music lovers!",
      name: "Christina Taylor",
      city: "Las Vegas",
    },
    {
      text: "I absolutely love the headphones. The sound quality is exceptional, with rich bass and clear highs, and they are incredibly comfortable to wear for long periods of time. The wireless connectivity is seamless and the battery life is impressive. These headphones are a must-have for music lovers!",
      name: "Thomas Jones",
      city: "Boston",
    },
  ];

  return (
    <Multicolumn cols={2}>
      {opinions?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col flex-1 max-w-lg gap-4 justify-start items-center rounded-3xl bg-slate-300"
        >
          <Image
            src={headphones}
            alt="customer"
            height={512}
            width={512}
            className="rounded-t-3xl"
          />
          <div className="flex flex-col p-6">
            <p className="mb-4 font-medium text-gray-700">{item.text}</p>
            <div className="flex items-center justify-between">
              <h5 className="font-semibold mb-1 text-gray-900">{item.name}</h5>
              <div className="flex gap-1 text-yellow-500 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="font-medium text-gray-400">{item.city}</p>
          </div>
        </div>
      ))}
    </Multicolumn>
  );
};

export default CustomersOpinions;

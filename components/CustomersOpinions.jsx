"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Multicolumn } from ".";

import headphones from "../assets/5.jpg";
import { useEffect, useState } from "react";

const opinions = [
  {
    text: "I absolutely love the headphones. The sound quality is exceptional, with rich bass and clear highs, and they are incredibly comfortable to wear for long periods of time. The wireless connectivity is seamless and the battery life is impressive. These headphones are a must-have for music lovers!",
    name: "Tom Smith",
    city: "New York",
  },
  {
    text: "I absolutely love.",
    name: "Cristina Taylor",
    city: "Las Vegas",
  },
  {
    text: "I absolutely love the headphones. The sound quality is exceptional, with rich bass and clear highs, and they are incredibly comfortable to wear for long periods of time. The wireless connectivity is seamless and the battery life is impressive. These headphones are a must-have for music lovers!",
    name: "Thomas Jones",
    city: "Boston",
  },
];

const COLS = 2;

const CustomersOpinions = () => {
  const [customerNotes, setCustomerNotes] = useState(opinions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const paginationArray =
    customerNotes.length > COLS
      ? new Array(customerNotes.length - COLS + 1).fill(null)
      : null;

  useEffect(() => {
    setAnimation("animate-fade-in");
  }, [currentIndex]);

  const getOpinionsToShow = () => {
    if (customerNotes.length <= COLS) return customerNotes;
    else return customerNotes.slice(currentIndex, currentIndex + COLS);
  };

  const handleClick = (id) => {
    setCurrentIndex(id);
    setAnimation("");
  };

  return (
    <>
      <h2 className="py-10 text-3xl font-semibold text-center px-2">
        What Our Customers Say
      </h2>
      <Multicolumn cols={"md:grid-cols-2"}>
        {getOpinionsToShow()?.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col flex-1 max-w-lg gap-4 justify-start items-center rounded-3xl bg-slate-300 ${animation}`}
          >
            <Image
              src={headphones}
              alt="customer"
              height={512}
              width={512}
              className="rounded-t-3xl"
            />
            <div className="flex flex-col p-6 w-full">
              <p className="mb-4 font-medium text-gray-700">{item.text}</p>
              <div className="flex items-center justify-between">
                <h5 className="font-semibold mb-1 text-gray-900">
                  {item.name}
                </h5>
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
      <div className="flex justify-center items-center gap-4">
        {paginationArray?.map((item, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full outline outline-offset-2 outline-2 outline-slate-300 ${
              currentIndex === index ? "bg-slate-300" : ""
            }`}
            onClick={() => handleClick(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

export default CustomersOpinions;

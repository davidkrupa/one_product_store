"use client";

import { useState } from "react";
import { Multicolumn } from ".";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Are headphones used both for iOS and Android devices?",
      answer:
        "Yes, the headphones are compatible with any Bluetooth-enabled device, including smartphones, tablets, and laptops running iOS, Android, Windows, and macOS operating systems.",
      isOpen: false,
    },
    {
      question: "Can I use the headphones for gaming?",
      answer:
        "While these headphones can be used for gaming, they may not provide the same level of performance and features as dedicated gaming headsets. However, they still offer excellent sound quality, comfort, and noise cancellation suitable for casual gaming experiences.",
      isOpen: false,
    },
  ]);

  const handleClick = (id) => {
    setQuestions((prev) =>
      prev.map((item, index) => {
        if (id !== index) return item;
        else return { ...item, isOpen: !item.isOpen };
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <h2 className="py-10 text-3xl font-semibold text-center px-2">
        Frequently Asked Questions
      </h2>

      <Multicolumn cols={"md:grid-cols-2"}>
        {questions?.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => handleClick(index)}
              className="flex justify-between items-center p-3 rounded-xl bg-slate-400"
            >
              <h5 className="text-base font-semibold">{item.question}</h5>
              {item.isOpen ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            {item.isOpen && (
              <p className="p-3 rounded-xl bg-slate-300">{item.answer}</p>
            )}
          </div>
        ))}
      </Multicolumn>
    </div>
  );
};

export default Faq;
